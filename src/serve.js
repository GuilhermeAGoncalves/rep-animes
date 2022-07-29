import express from "express";
import authorizationMiddleware from "./middlewares/authorization.js";
import erroHandle from "./middlewares/erroHandle.js";
import { animeActions, userRouter } from "./Routes/index.js";
import consoleMiddleware from "./middlewares/console.js";

const PORT = 3000;

const server = express();

server.use(consoleMiddleware);
server.use(express.json());
server.use("/", userRouter);
server.use(authorizationMiddleware);
server.use("/anime", animeActions);
server.use(erroHandle);

server.listen(PORT, () => {
  console.log(`Serve rodando na porta ${PORT}`);
});
