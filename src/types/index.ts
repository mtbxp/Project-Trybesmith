export interface TNewProduct {
  name: string,
  amount: string,
  orderId?: number
}

export interface TProducts extends TNewProduct {
  id: number
}

export interface TOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface TRegister {
  username: string,
  vocation: string,
  level: number,
  password: string
}