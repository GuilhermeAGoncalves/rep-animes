class UserDTO {
  constructor(user) {
    const { userName, email } = user;

    this.userName = userName;
    this.email = email;
  }
}

export default UserDTO;
