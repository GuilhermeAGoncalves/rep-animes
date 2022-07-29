import mongoose from "mongoose";

const AnimeModel = mongoose.model("Animes", {
  name: String,
});

export default AnimeModel;
