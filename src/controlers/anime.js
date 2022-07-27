import {
  buscarTodosAnimes,
  buscarUmAnime,
  salvarNovoAnime,
  atualizarAnime,
  removerAnime,
} from "../models/animes.js";
import AnimeDTO from "../views/animeDTO.js";

//Read
export const buscarAnimes = async (req, res) => {
  res.status(200).json(await buscarTodosAnimes());
};

//Read one
export const getUmAnime = (req, res) => {
  const anime = buscarUmAnime(req.params.id);
  const dto = new AnimeDTO(anime);

  res.status(200).json(dto.toJson());
};

//Post
export const postNovoAnime = async (req, res) => {
  let { name } = req.body;

  res.status(201).json(await salvarNovoAnime(name));
};

//PUT
export const putAnime = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  res.status(201).json(await atualizarAnime(id, name));
};

//Delete
export const deleteAnime = async (req, res) => {
  const id = req.params.id;

  await removerAnime(id);

  res.status(200).json("Anime Removido");
};
