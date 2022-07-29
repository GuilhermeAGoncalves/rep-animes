import * as userService from "../service/userService.js";
import * as userToken from "../service/tokenService.js";

import TokenDTO from "../views/tokenDTO.js";
import UserDTO from "../views/usersDTO.js";

export const getUsuarios = async (req, res) => {
  res.status(200).json(await userService.buscarUsers());
};

export const registerNewUser = async (req, res) => {
  let { userName, password, email, isAdm } = req.body;

  let user = await userService.addNewUser(userName, password, email, isAdm);

  res.status(201).json(new UserDTO(user));
};

export const loginUser = async (req, res) => {
  let { email, password } = req.body;

  const user = await userService.getUserByEmailOrUserName(email);

  if (!user) {
    res.status(403).json("Unathorized");
  }

  if (user.password !== password) {
    res.status(403).json("Unathorized");
  }

  const token = await userToken.createToken(user._id);

  res.status(201).json(new TokenDTO(token));
};
