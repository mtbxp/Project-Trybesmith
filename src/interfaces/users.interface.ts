export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface IUserResponse<T> {
  type: number,
  message: T
}
