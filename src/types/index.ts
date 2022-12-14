export interface Product {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

export type ProductInput = Omit<Product, 'id' | 'orderId'>;
