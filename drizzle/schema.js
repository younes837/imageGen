import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk user ID
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const images = pgTable("images", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }), // Foreign key to users table
  prompt: text("prompt").notNull(),
  imageUrl: text("image_url").notNull(),
  model: text("model").notNull(),
  generationTime: text("generation_time").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
