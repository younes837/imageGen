import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";

let db;

if (typeof window === "undefined") {
  const client =
    process.env.NODE_ENV === "production"
      ? postgres(process.env.DATABASE_URL)
      : postgres(process.env.DATABASE_URL, { max: 1 });

  db = drizzle(client, { schema });
}

export { db };
