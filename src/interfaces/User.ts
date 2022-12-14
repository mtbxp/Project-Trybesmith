export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}

export interface NewUser extends User {
  password: string,
}
