import express from "express";
import { animeActions, animeRomance, animeTerror } from "./Routes/index.js";

const PORT = 3000;

const server = express();

server.use("/action", animeActions);
server.use("/romance", animeRomance);
server.use("/terror", animeTerror);

server.listen(PORT, () => {
  console.log(`Serve rodando na porta ${PORT}`);
});
