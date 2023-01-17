export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
}

export interface NewUser {
  id?: number,
  username: string,
}

export interface Token {
  token: string,
}