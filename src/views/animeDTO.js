class AnimeDTO {
  constructor(anime) {
    this.id = anime.id;
    this.name = anime.name;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}

export default AnimeDTO;
