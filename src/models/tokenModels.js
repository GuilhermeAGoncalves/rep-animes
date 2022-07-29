import mongoose from "mongoose";

const TokenModel = mongoose.model("Token", {
  createAt: String,
  active: Boolean,
  userId: String,
});

export default TokenModel;
