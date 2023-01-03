export interface ProductDetail {
  name: string;
  amount: string;
}

export interface Product extends ProductDetail {
  id: number;
}

export interface UserDetail {
  username: string;
  vocation: string;
  level: number;
  password: string;
}
  
export interface User extends UserDetail {
  id: number;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Order {
  id: number;
  userId: number;
}

export interface OrderWithProduct {
  id: number,
  userId: number,
  productsIds: number[]
}
