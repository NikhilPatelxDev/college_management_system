import "dotenv/config";
import z from "zod";

const envSchema = z.object({ PORT: z.coerce.number().default(5000) });

const parsedSchema = envSchema.safeParse(process.env);

if (!parsedSchema.success) {
  console.error(`Environment variables(env) is missing or invalid`);
  process.exit(1);
}

export const env = Object.freeze(parsedSchema.data);
