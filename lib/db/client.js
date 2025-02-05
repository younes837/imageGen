import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";

// Only create the client in a server environment
const client =
  process.env.NODE_ENV === "production"
    ? postgres(process.env.DATABASE_URL)
    : postgres(process.env.DATABASE_URL, { max: 1 });

export const db = drizzle(client, { schema });
