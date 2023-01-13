export interface Product {
  name: string;
  amount: string;
}

export interface ProductR extends Product {
  id: number;
}

export interface ProductOrd extends ProductR {
  orderId?: number;
}
