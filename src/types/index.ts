export type TProduct = {
  name: string;
  amount: string;
  orderId?: number;
};

export type Product = {
  id: number;
} & TProduct;
