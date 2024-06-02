import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  boolean,
} from "drizzle-orm/mysql-core";

export const tasks = mysqlTable("tasks", {
  id: int("id").notNull().primaryKey().unique().autoincrement(),
  public_id: varchar("public_id", { length: 1024 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 512 }).notNull(),
  completed: boolean("completed").notNull().default(false),
});

export const countries = mysqlTable(
  "countries",
  {
    id: int("id").primaryKey().unique().autoincrement(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => ({
    nameIndex: uniqueIndex("name_idx").on(countries.name),
  })
);
export const cities = mysqlTable("cities", {
  id: int("id").primaryKey().unique().autoincrement(),
  name: varchar("name", { length: 256 }),
  countryId: int("country_id").references(() => countries.id),
  popularity: mysqlEnum("popularity", ["unknown", "known", "popular"]),
});

// TODO: Put in db/index.ts
// export { default as category } from "./category";
