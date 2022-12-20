export default interface NewProductInput {
  name: string;
  amount: string;
}

export type LastProducts = [[{
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}], []];