export interface UserCredential {
  email: string,
  password: string,
}

export interface IUser {
  username: string,
  vocations: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number;
}

export interface IProduct {
  id: number,
  name: string,
  amount: string,
}
