export interface NewProduct {
  name: string,
  amount: string,
  orderId?: | number,
}

export interface TProduct extends NewProduct {
  id: number,
}

export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}
  
export interface UserWithPassword extends User {
  password: string,
}