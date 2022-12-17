interface Users {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

interface UsersLogin {
  username: string,
  password: string,
}

export { Users, UsersLogin };