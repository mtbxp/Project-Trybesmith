export type TAddProduct = {
  id: number;
  name: string;
  amount: string;
};

export type TProducts = {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
};
