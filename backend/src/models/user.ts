import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["student", "lecturer", "admin", "super_admin"],
    },
    status: { type: String, enum: ["active", "inactive", "suspended"] },
    refreshToken: { type: String },
  },
  { timestamps: true },
);

export type UserData = InferSchemaType<typeof userSchema>;

export const User = model<UserData>("User", userSchema);
