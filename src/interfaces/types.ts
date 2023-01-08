export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId: number;
}

export interface NewProduct {
  name: string,
  amount: string
}

export interface ProductRegistered extends NewProduct {
  id: number
}
