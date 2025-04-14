import mongoose from "mongoose";

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
      required: true,
      unique: true,
      trim: true,
      min: 3,
      max: 50,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
