export interface Product {
  name: string,
  amount: string,
  orderId?: number
}

export interface ProductId extends Product {
  id: number
}

export interface Users {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string
}

// export interface UserPassword extends Users {
//   password: string,
// }