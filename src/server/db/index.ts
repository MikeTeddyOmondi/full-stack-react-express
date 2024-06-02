import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

const poolConnection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
});

import * as schema from "@/server/db/schema.js";
import env from "@/server/env.js";

// export const connection = postgres(env.DATABASE_URL, {
//   max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined,
//   onnotice: env.DB_SEEDING ? () => {} : undefined,
// });

// export const db = drizzle(connection, {
//   schema,
//   logger: true,
// });

export const db = drizzle(poolConnection, {
  logger: env.NODE_ENV === "development" ?? false,
});

export type db = typeof db;

export default db;
