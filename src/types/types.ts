export interface NewProduct {
  name: string,
  amount: string,
  orderId?: number,
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
export interface Login {
  username: string,
  password: string
}

export type TOrderCreated = {
  id?: number,
  userId: number,
  productsIds: number[]
};

export type TCurrentUser = {
  currentUser: {
    id: number,
    username: string,
    iat: number,
    exp: number
  }
} & TOrderCreated;