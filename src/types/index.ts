export type TProduct = {
  name: string;
  amount: string;
  orderId?: number;
};

export type Product = {
  id: number;
} & TProduct;

export type TUser = {
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type User = {
  id: number;
} & TUser;
