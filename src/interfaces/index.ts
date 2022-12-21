export interface IProduct {
  id?: number,
  name: string,
  amount: number,
  orderId?: number,
}

export interface IProductReturn {
  status: number,
  message: string | IProduct | IProduct[], 
}