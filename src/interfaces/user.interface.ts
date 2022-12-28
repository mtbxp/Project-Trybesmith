export interface UserParameters {
  username: string,
  vacation: string,
  level: number,
  password: string
}

export interface User extends UserParameters {
  id: number,
}
