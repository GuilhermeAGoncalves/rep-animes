import mongoose from "mongoose";

const UserModel = mongoose.model("Users", {
  name: String,
  password: String,
  email: String,
  isAdm: Boolean,
});

export const buscarUsers = async () => {
  return await UserModel.find();
};

export const verificarId = async (id) => {
  try {
    await UserModel.findById(id);
    return "User encontrado";
  } catch {
    return "User não encontrado";
  }
};

export const addNovoUser = async (name, password, email, isAdm) => {
  const newUser = new UserModel({
    name,
    password,
    email,
    isAdm,
  });

  await newUser.save();

  return newUser;
};
