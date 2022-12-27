export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}
  
export interface AddUser extends User {
  password: string,
}
