import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.MONGODB_URL);
    console.log(`Database successfully connected`);
  } catch (error: any) {
    console.error(`Error connecting in database: ${error.message}`);
    process.exit(1);
  }
};
