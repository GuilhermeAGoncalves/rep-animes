import { Router } from "express";
import * as userControler from "../controllers/userControler.js";

const userRouter = new Router();

userRouter.get("/", userControler.getUsuarios);

userRouter.post("/register", userControler.registerNewUser);

userRouter.post("/login", userControler.loginUser);

export default userRouter;
