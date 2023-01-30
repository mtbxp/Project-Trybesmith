export type Product = {
  id?: number;
  name: string;
  amount: number;
  orderId?: number;
};

export type User = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
};