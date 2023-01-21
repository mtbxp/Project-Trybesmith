export type IProduct = {
  name: string;
  amount: string;
  orderId?: number,
};

export type Product = {
  id: number,
} & IProduct;

export type IUser = {
  username: string, 
  vocation: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
} & IUser;

export type JwtPayload = {
  id: number, 
  name: string,
};

export type IOrder = {
  userId?: number,
  productsIds: number[],
};

export type Order = {
  user: JwtPayload,
} & IOrder;

export type ILogin = {
  username: string,
  password: string
};
