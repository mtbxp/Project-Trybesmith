export default interface IProducts {
  name: string;
  amount: string;
  orderId?: number;
}

export interface NewProduct extends IProducts {
  id: number,
}