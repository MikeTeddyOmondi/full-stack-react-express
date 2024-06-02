import cors from "cors";
import { config } from "dotenv";
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import ViteExpress from "vite-express";
import express, { NextFunction, Request, Response } from "express";

import { db } from "./db/index.js";
import { tasks } from "./db/schema.js";
import { ResponseError, createError, logger } from "./utils/index.js";
import { NODE_ENV } from "./config.js";
import path, { join } from "path";
import { cwd } from "process";

// Load .env
config();

const app = express();
const port = Number(process.env.PORT) || Number(4556);
ViteExpress.config({
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
});

// Middlewares
app.use(express.static("public")); // Set static folder
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// API routes
app.get("/api", (_, res, next) => {
  logger.info({ success: true, message: "Application works!" });
  res.json({ success: true, message: "Application works!" });
});

app.get("/api/tasks", async (req, res, next) => {
  try {
    const result = await db.select().from(tasks);
    logger.info({ data: result }, "Task(s) read!");
    res.json({ success: true, message: "Task(s) read!", data: result });
  } catch (err: any) {
    logger.error(`Error reading task(s): ${err.message}`);
    next(createError(500, `Error reading task(s): ${err.message}`));
  }
});

app.post("/api/tasks", async (req, res, next) => {
  try {
    const public_id = uuid();
    const { title, description } = req.body;
    if (title === "" || description === "") {
      logger.error(
        "Error creating task(s): Please provide a title & a description"
      );
      return res.status(400).json({
        success: false,
        message: "Please provide a title & a description!",
      });
    }

    // const result = await db
    //   .insert(tasks)
    //   .values({ public_id, title, description })
    //   .returning()
    //   .all();

    type NewTask = typeof tasks.$inferInsert;

    const newTask: NewTask = {
      public_id,
      description,
      title,
    };

    const result = await db.insert(tasks).values(newTask);

    logger.info({ data: result[0] }, "Task(s) created!");
    res
      .status(201)
      .json({ success: true, message: "Task(s) created!", data: result[0] });
  } catch (err: any) {
    logger.error(`Error creating task(s): ${err.message}`);
    next(createError(500, `Error creating task(s): ${err.message}`));
  }
});

app.get("/api/tasks/:pid", async (req, res, next) => {
  try {
    const { pid } = req.params;
    const result = await db
      .select()
      .from(tasks)
      .where(eq(tasks.public_id, pid));

    if (result.length === 0) {
      logger.error(`Tasks(s): ${pid} not found!`);
      return res.status(404).json({
        success: false,
        message: "Task(s) not found!",
      });
    }

    logger.info({ data: result }, "Task(s) read");
    res.json({ success: true, message: "Task(s) read!", data: result });
  } catch (err: any) {
    logger.error(`Error reading task(s): ${err.message}`);
    next(createError(500, `Error reading task(s): ${err.message}`));
  }
});

app.put("/api/tasks/:pid", async (req, res, next) => {
  try {
    const { pid } = req.params;
    const { title, description } = req.body;
    if (title === "" || description === "") {
      logger.error(
        "Error updating task(s): Please provide a title & a description to update!"
      );
      return res.status(400).json({
        success: false,
        message: "Please provide a title & a description to update!",
      });
    }

    const result = await db
      .update(tasks)
      .set({ title, description })
      .where(eq(tasks.public_id, pid));
    // .returning();

    logger.info({ data: result[0] }, `Task(s): ${pid} updated!`);
    res.json({
      success: true,
      message: "Task(s) updated!",
      data: result[0],
    });
  } catch (err: any) {
    logger.error(`Error updating task(s): ${err.message}`);
    next(createError(500, `Error reading task(s): ${err.message}`));
  }
});

// app.put("/api/tasks/complete/:pid", async (req, res, next) => {
//   try {
//     const { pid } = req.params;
//     const fetchResult = await db
//       .select()
//       .from(tasks)
//       .where(eq(tasks.public_id, pid));
//     const result = await db
//       .update(tasks)
//       .set({ completed: fetchResult[0].completed ? false : true })
//       .where(eq(tasks.public_id, pid))
//       // .returning();

//     logger.info(`Task(s): ${pid} completed!`);
//     res.json({
//       success: true,
//       message: "Task(s) completed!",
//       data: result[0],
//     });
//   } catch (err: any) {
//     logger.error(`Error completing task(s): ${err.message}`);
//     next(createError(500, `Error completing task(s): ${err.message}`));
//   }
// });

// app.delete("/api/tasks/:pid", async (req, res, next) => {
//   try {
//     const { pid } = req.params;
//     const result = await db
//       .delete(tasks)
//       .where(eq(tasks.public_id, pid))
//       .returning();
//     if (result.length === 0) {
//       logger.error(`Error deleting task(s): ${pid} not found!`);
//       return res.status(404).json({
//         success: false,
//         message: `Task(s): ${pid} not found!`,
//       });
//     }
//     res.json({
//       success: true,
//       message: `Task(s): ${pid} deleted!`,
//       data: result,
//     });
//   } catch (err: any) {
//     logger.error(`Error deleting task(s): ${err.message}`);
//     next(createError(500, `Error deleting task(s): ${err.message}`));
//   }
// });

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"))
  );
} else {
  // 404 route
  app.get("*", (req, res, next) => {
    logger.error("Resource Not Found!");
    next(createError(500, `Resource Not Found!`));
  });
}

// Error Middleware
app.use(
  (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      data: {
        message: errorMessage,
      },
      stack: NODE_ENV === "production" ? {} : err.stack,
    });
  }
);

// Start HTTP Server
ViteExpress.listen(app, port, () => {
  // console.log(`Server is listening on port ${port}...`);
  logger.info(`Server is listening on port ${port}...`);
});
