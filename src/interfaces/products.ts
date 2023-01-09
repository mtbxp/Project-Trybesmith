export interface ProductInterface {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

export interface AddedProductInterface {
  id: number;
  name: string;
  amount: string;
}

export interface ProductBodyInterface {
  name: string;
  amount: string;
}