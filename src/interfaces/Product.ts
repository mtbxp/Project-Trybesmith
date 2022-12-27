export interface NewProduct {
  name: string,
  amount: string,
}

export interface CreatedProduct extends NewProduct {
  id: number,
}

export interface Product extends CreatedProduct {
  orderId: number,
}