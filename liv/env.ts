import { z } from "zod";

const schema = z.object({
  MONGODB_URI: z.string().min(1),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 chars"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

export const env = schema.parse(process.env);
