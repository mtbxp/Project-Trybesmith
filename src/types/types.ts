export interface NewProduct {
  name: string,
  amount: string,
  orderId: null | number,
}

export interface TProducts extends NewProduct {
  id: number,
}
