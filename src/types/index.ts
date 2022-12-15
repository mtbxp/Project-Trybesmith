export interface Product {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

export type ProductInput = Omit<Product, 'id' | 'orderId'>;

export interface User {
  id: number;
  username: string;
  vocation: string;
  password: string;
  level: number;
}

export type UserInput = Omit<User, 'id'>;

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

export type OrderInput = Omit<Order, 'id'>;

export interface Credentials {
  username: string;
  password: string;
}
