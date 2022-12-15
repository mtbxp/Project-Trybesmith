export interface Product {
  name: string;
  amount: number;
}

export interface IProduct extends Product {
  id: number;
}

export interface Status {
  status: number;
}

export interface ProductService extends Status {
  result: IProduct;
}

export interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface IUser extends User {
  id: number;
}

export interface UserService extends Status {
  result: IUser;
}

export interface Token {
  token: string;
}

export interface TokenService extends Status {
  result: string;
}

export interface ServiceError extends Status {
  error: { message: string }
}

export interface Orders {
  id: number;
  orderId: number;
  productId: [number];
}

export interface CreateOrderReturn {
  userId: number;
  productsIds: [number];
}

export interface OrderService extends Status {
  result: Orders
}