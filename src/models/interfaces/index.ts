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

export type TUserWithoutPassword = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
};

// export type TToken = {
//   token: string
// };

export type TAuthorization = {
  authorization: string
};

export type TJwtConfig = {
  algorithm: string,
  expiresIn: string,
};