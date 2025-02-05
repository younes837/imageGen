import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "../../drizzle/schema";

let db;

if (typeof window === "undefined") {
  db = drizzle(sql, { schema });
}

export { db };
