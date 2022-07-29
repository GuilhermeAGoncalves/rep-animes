import DBError from "../err/dbErro.js";
import UserModel from "../models/usersModels.js";

export const buscarUsers = async () => {
  return await UserModel.find();
};

export const addNewUser = async (userName, password, email, isAdm) => {
  const testUser = await getUserByEmailOrUserName(email);
  if (testUser) {
    throw new DBError("Usuario ja existente");
  }

  const newUser = new UserModel({
    userName,
    password,
    email,
    isAdm,
  });

  await newUser.save();

  return newUser;
};

export const getUserByEmailOrUserName = async (email) => {
  const user = await UserModel.findOne({ email });

  return user;
};
