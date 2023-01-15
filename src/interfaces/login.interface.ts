export interface ILogin {
  username: string,
  password: string
}

export interface ILoginResponse<T> {
  type: number,
  message: T
}