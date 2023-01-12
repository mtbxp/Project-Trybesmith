export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IProductResponse<T> {
  type: number,
  message: T,
}
