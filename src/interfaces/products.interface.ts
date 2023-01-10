export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IProductResponse {
  type: number,
  message: number | string | IProduct,
}
