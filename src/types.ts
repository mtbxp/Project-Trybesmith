export interface NewProduct {
  name: string,
  amount: number,
}

export interface Product {
  id: number,
  name: string,
  amount: number,
}

export interface NewUser { 
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface Order {
  id: number,
  userId: number,
  productsIds: number[],
}

export interface NewOrder {
  userId: number,
  productsIds: number[],
}

export interface Credentials {
  username: string,
  password: string,
}

export interface User {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}