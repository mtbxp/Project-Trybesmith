export interface ProductDetail {
  name: string;
  amount: string;
}

export interface Product extends ProductDetail {
  id: number;
}