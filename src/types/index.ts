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
