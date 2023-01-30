export interface IdProduct {
  name: string;
  amount: string;
}

export interface Product extends IdProduct {
  id: number;
}

export interface ProductAll {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}