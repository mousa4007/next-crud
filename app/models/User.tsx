import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "anonymous",
      required: true,
      trim: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      default: "anonymous",
      required: true,
      unique: true,
      trim: true,
      min: 3,
      max: 50,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
