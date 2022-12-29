export interface User {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface LogUser {
  username: string,
  password: string,
}

export interface LoggedUser {
  userId: number,
  username: string,
}

export interface CreatedUser {
  userId: number,
  username: string,
  vocation: string,
  level: number,
}