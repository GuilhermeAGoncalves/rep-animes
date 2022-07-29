import mongoose from "mongoose";

const UserModel = mongoose.model("users", {
  userName: String,
  password: String,
  email: String,
  isAdm: Boolean,
});

export default UserModel;
