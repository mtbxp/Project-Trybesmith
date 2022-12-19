export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IUserWithoutPassword {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
}