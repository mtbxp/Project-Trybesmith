export interface HttpError {
  message: string
}

export interface Product {
  id?: number,
  name: string,
  amount: string
}

export interface Login {
  username: string,
  password: string  
}

export interface User extends Login {
  id?: number,
  vocation: string,
  level: number,
}

export interface Order {
  id?: number,
  userId: number,
  productsIds: number[],
}
