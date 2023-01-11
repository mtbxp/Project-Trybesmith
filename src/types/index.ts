export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface User {
  username: string,
  vocation?: string,
  level?: number,
  password?: string,
}

export interface Orders {
  id?: number,
  userId: number,
  productsIds: number[]
}
