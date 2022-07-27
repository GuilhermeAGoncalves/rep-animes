import { Router } from "express";
import { buscarUsers, addNovoUser, verificarId } from "../models/users.js";

const userRouter = new Router();

userRouter.get("/", async (req, res) => {
  const listUsers = await buscarUsers();
  res.status(200).json(listUsers);
});

userRouter.post("/", async (req, res) => {
  let { name, password, email, isAdm } = req.body;

  res.status(201).json(await addNovoUser(name, password, email, isAdm));
});

userRouter.get("/:id/post", async (req, res) => {
  const id = req.params.id;
  res.status(200).json(await verificarId(id));
});

export default userRouter;
