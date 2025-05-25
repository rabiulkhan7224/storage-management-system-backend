import mongoose from "mongoose";
import { Iuser } from "../types/user.types";

const UserSchema= new mongoose.Schema<Iuser>({
     name: String,
  email: { type: String, unique: true },
  password: String,
}, { timestamps: true }
)
const User= mongoose.model('User', UserSchema);
export default User;