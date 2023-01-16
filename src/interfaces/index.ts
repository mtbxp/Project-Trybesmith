export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export type TUser = {
  id?: number,
  username: string,
};

export interface IUser extends TUser {
  vocation: string,
  level: number,
  password: string,
}

export interface Order {
  id?: number;
  userId: number;
  productsIds: number[];
}
