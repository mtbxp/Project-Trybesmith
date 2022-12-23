export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface Order {
  id: number,
  userId: number,
  productsId: number[],
}

export interface Login {
  id?: number,
  username: string,
  password?: string,
}
