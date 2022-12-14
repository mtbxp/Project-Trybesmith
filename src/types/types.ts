export interface NewProduct {
  name: string
  amount: string
}

export interface RegisteredProduct extends NewProduct {
  id: number
}

export interface DatabaseProduct extends RegisteredProduct {
  orderId?: number,
}