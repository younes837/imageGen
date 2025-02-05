/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./drizzle/schema.js",
  out: "./drizzle/migrations",
  driver: "pg",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL || process.env.DATABASE_URL,
  },
};
