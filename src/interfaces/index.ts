export interface IdProduct {
  name: string;
  amount: string;
}

export interface Product extends IdProduct {
  id: number;
}

export interface AllProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

export interface AllOrders {
  id?: number,
  userId: number,
  productsIds: [number],
}