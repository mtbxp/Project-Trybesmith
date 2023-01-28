export type Product = {
  id?: number,
  name: string,
  amount: string
};

export type Login = {
  username: string,
  password: string
};

export interface LoginComId {
  id: number,
  username: string,
  password: string,
}

export type User = {
  username: string,
  vocation: string,
  level: number,
  password: string
};

export type AddOrder = {
  productsIds: number[],
};
