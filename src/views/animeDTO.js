class AnimeDTO {
  constructor(anime) {
    this.name = anime.name;
  }

  toJson() {
    return {
      name: this.name,
    };
  }
}

export default AnimeDTO;
