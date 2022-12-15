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

export interface DatabaseUser extends NewUser {
  id: number,
}

export interface CreatedUser {
  id: number,
  username: string,
}

export interface OrdersArray {
  id: number,
  userId: number,
  productsIds: number[] 
}

export interface UserLogin {
  username: string,
  password: string
}