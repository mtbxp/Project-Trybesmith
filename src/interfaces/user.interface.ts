export interface UserParameters {
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface User extends UserParameters {
  id: number,
}
