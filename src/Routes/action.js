import { Router } from "express";
import {
  buscarAnimes,
  postNovoAnime,
  deleteAnime,
  putAnime,
  getUmAnime,
} from "../controlers/anime.js";

const animeActions = new Router();

animeActions.get("/", buscarAnimes);

animeActions.get("/:id", getUmAnime);

animeActions.post("/", postNovoAnime);

animeActions.put("/:id", putAnime);

animeActions.delete("/:id", deleteAnime);

export default animeActions;
