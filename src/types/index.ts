export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
};

export type Id = number;
export type Token = string;