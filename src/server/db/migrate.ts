// import { config } from "dotenv";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";

// config();

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER
} from "../config.js";

import config from "$/drizzle.config.js";
// import { db, connection } from "@/server/db";
import env from "@/server/env.js";

if (!env.DB_MIGRATING) {
  throw new Error(
    'You must set DB_MIGRATING to "true" when running migrations'
  );
}

const connection = await mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  multipleStatements: true,
});

export const db = drizzle(connection);

async function main() {
  try {
    await migrate(db, { migrationsFolder: config.out });
  } catch (error) {
    console.log(`[!] Migration error: ${error}`);
    await connection.end();
  }
  await connection.end();
}

main();
