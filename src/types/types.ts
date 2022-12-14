export interface NewProduct {
  name: string
  amount: string
}

export interface RegisteredProduct extends NewProduct {
  id: number
}

export interface DatabaseProduct extends RegisteredProduct {
  orderId?: number,
}

export interface NewUser {
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface CreatedUser {
  id: number,
  username: string,
}