import { Router } from "express";
import * as animeControler from "../controllers/animeControler.js";

const animeActions = new Router();

animeActions.get("/", animeControler.buscarAnimes);

animeActions.get("/:id", animeControler.getUmAnime);

animeActions.post("/", animeControler.postNovoAnime);

animeActions.put("/:id", animeControler.putAnime);

animeActions.delete("/:id", animeControler.deleteAnime);

export default animeActions;
