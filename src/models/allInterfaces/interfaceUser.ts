export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string
};

export type TUserIdName = {
  id?: number,
  username: string,
};

export type TAuthorization = {
  authorization: string
};

export type TJwtConfig = {
  algorithm: string,
  expiresIn: string,
};