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

export interface ProductDetail {
  name: string,
  amount: string,
}

export interface IProduct extends ProductDetail {
  id: number,
  name: string,
  amount: string,
}
