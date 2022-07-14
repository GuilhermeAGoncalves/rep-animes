import { Router } from "express";

const animeRomance = new Router();

animeRomance.get("/", (req, res) => {
  res.send("as");
});

export default animeRomance;
