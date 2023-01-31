export type TProducts = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUsers = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type TOrders = {
  id?: number,
  userId: number,
  productsIds: number
};

export type TLogin = {
  username: string,
  password: string,
};

export type TOrderCreated = {
  id?: number,
  userId: number,
  productsIds: number[]
};

export type TLoggedUser = {
  loggedUser: {
    id: number,
    username: string,
    iat: number,
    exp: number
  }
} & TOrderCreated;
