class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.isAdm = user.isAdm;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      isAdm: this.isAdm,
    };
  }
}
