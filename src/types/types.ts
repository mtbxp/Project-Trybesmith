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
// data para usar no Order.Model

export type TCurrentUser = {
  currentUser: {
    data:{
      id: number,
      username: string,

    }
    iat: number,
    exp: number
  }
} & TOrderCreated;