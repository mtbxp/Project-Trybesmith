export type ProductRequest = {
  name: string,
  amount: string,
};

export type Product = {
  id: number,
  orderId: null | number,
} & ProductRequest;