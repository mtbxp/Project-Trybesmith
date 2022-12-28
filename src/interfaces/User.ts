export interface User {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface CreatedUser {
  userId: number,
  username: string,
  vocation: string,
  level: number,
}