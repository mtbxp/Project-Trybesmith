export interface IProduct {
  name: string;
  amount: string;
  orderId?: number,
}

export interface Product extends IProduct {
  id: number,
}

export interface IUser {
  username: string, 
  vocation: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number,
}

export interface JwtPayload {
  id: number, 
  name: string,
}

export interface IOrder {
  id: number, 
  userId: number,
  productsIds: number[],
}

export interface ILogin {
  username: string,
  password: string
}