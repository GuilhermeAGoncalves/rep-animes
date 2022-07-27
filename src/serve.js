import express from "express";
import { animeActions, userRouter } from "./Routes/index.js";

const PORT = 3000;

const server = express();

server.use(express.json());
server.use("/user", userRouter);
server.use("/", animeActions);

server.listen(PORT, () => {
  console.log(`Serve rodando na porta ${PORT}`);
});
