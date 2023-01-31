export interface Orders {
  id?: number;
  userId: object;
  productsIds: number[]
}

export interface InterToken {
  token: string
}

export interface UserOrdersResponse extends Response {
  message: Orders
}

export interface LoginResponse extends Response {
  message: InterToken | string
}

export interface InterDecoded {
  data: {
    userId: number
  }
}

export type IOrder = {
  userId?: number,
  productsIds: number[],
};

export type JwtPayload = {
  id: number, 
  name: string,
};

export type Order = {
  user: JwtPayload,
} & IOrder;