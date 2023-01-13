export interface NewProduct {
  name: string,
  amount: string,
  orderId?: number,
}
  
export interface TProduct extends NewProduct {
  id: number,
}