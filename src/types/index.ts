export type Product = {
  id?: number;
  name: string;
  amount: number;
  orderId?: number;
};

export type User = {
  id?: number,
  username: string,
  vocation?: string,
  level?: number,
  password?: string,
};

export type Order = {
  id?: number,
  userId: number,
  productsIds: number[],
};

export type MessageJson = {
  type:number,
  message: string | Promise<string>,
};

export type Token = {
  id: number,
};
