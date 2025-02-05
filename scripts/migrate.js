import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";

async function main() {
  try {
    const db = drizzle(sql);
    console.log("Running migrations...");
    await migrate(db, { migrationsFolder: "./drizzle/migrations" });
    console.log("Migrations completed!");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed!", error);
    process.exit(1);
  }
}

main();
