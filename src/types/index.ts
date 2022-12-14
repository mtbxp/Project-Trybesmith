export type TProduct = {
  id?: number,
  name: string,
  amount: number,
  orderId?: number | null,
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};
