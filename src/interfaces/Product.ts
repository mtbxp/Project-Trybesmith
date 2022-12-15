export interface NewProduct {
  name: string,
  amount: string,
  orderId?: number,
}

export interface IProducts extends NewProduct {
  id: number;
}

export interface Order {
  id: number,
  userId: number,
  productsIds: number[],
}

export interface OrderCreated {
  userId: number,
  productsIds: number[],
}
