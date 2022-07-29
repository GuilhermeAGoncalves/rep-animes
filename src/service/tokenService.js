import TokenModel from "../models/tokenModels.js";
import TokenErro from "../err/tokenErro.js";
import moment from "moment";

export const createToken = async (userId) => {
  const token = new TokenModel();

  token.createdAt = new Date();
  token.active = true;
  token.userId = userId;

  await token.save();

  return token;
};

export const getValidToken = async (tokenId) => {
  const token = await TokenModel.findById(tokenId);

  if (!token) throw new TokenErro("Token Invalido");

  if (!token.active) throw new TokenErro("Token Inativo");

  const expireAt = moment(token.createAt);
  expireAt.add(3, "d");

  if (expireAt < moment()) throw new TokenErro("Token Inativo");

  return token;
};
