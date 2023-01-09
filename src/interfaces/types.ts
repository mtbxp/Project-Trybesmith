export interface Product {
  id: number;
  name: string;
  amount: string;
  orderId: number;
}

export interface NewProduct {
  name: string,
  amount: string
}

export interface ProductRegistered extends NewProduct {
  id: number
}

export interface NewUser {
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface User extends NewUser {
  id: number
}

export interface UserCreated {
  id: number,
  username: string
}

export interface UserLogin {
  username: string,
  password: string
}