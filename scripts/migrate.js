import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const migrationClient = postgres(process.env.DIRECT_URL, { max: 1 });
const db = drizzle(migrationClient);

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./drizzle/migrations" });
  console.log("Migrations completed!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed!");
  console.error(err);
  process.exit(1);
});
