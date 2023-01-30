export interface Orders {
  id?: number;
  user: string;
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