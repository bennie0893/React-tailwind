import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { Type: String, required: true, unique: true },
    email: { Type: String, required: true, unique: true },
    password: { Type: String, required: true },
  },
  { timestamps: true }
);
const user = mongoose.model("user", userSchema);

export default user;
