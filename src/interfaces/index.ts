export interface IProduct {
  id?: number,
  name: string,
  amount: number,
}

export interface IProductReturn {
  status: number,
  message: string | IProduct, 
}