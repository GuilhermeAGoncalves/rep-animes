import { Router } from "express";

const animeActions = new Router();

animeActions.get("/", (req, res) => {
  res.send("as");
});

export default animeActions;
