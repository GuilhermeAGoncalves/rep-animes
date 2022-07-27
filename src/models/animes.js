import mongoose from "mongoose";

const AnimeModel = mongoose.model("Animes", {
  name: String,
});

export const buscarTodosAnimes = async () => {
  return await AnimeModel.find();
};

export const buscarUmAnime = async (id) => {
  return await AnimeModel.findById(id);
};

export const salvarNovoAnime = async (name) => {
  const newAnime = new AnimeModel({
    name,
  });

  await newAnime.save();

  return newAnime;
};
export const atualizarAnime = async (id, name) => {
  const anime = await AnimeModel.findById(id);

  anime.name = name;

  await anime.save();

  return anime;
};
export const removerAnime = async (id) => {
  return await AnimeModel.findByIdAndDelete(id);
};
