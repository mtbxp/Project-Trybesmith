export interface NewUser {
  id?: number,
  username: string,
}

export interface Credentials {
  username: string,
  password: string,
}

export interface User extends NewUser, Credentials {
  vocation: string,
  level: number,
}
