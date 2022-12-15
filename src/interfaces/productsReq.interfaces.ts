export interface ProductReq {
  name: string;
  amount: string;
}

export interface ProductsResponse {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
}