export type TProduct = {
  id?: number;
  name: string;
  amount: string;
};

export type TProductResponse = {
  type: number,
  message: number | string | TProduct,
};
