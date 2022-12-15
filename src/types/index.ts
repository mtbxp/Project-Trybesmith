export type TProduct = {
  id?: number;
  name: string,
  amount: string
};

export type TUser = {
  id?: number;
  username: string,
  vocation: string,
  level: number,
  password?: string
};

export type IToken = {
  payload: {
    id?: number;
    username: string,
    vocation: string,
    level: number,
    password?: string
  };
  iat: number;
  exp: number;
};

export type TOrders = {
  id: number;
  userId: number,
  productsIds: number[]
};

export type Tpayload = {
  username: string,
  password: string,
  iat: number,
  exp: number
};
