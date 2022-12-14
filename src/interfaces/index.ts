export interface Product {
  name: string;
  ammount: number;
}

export interface IProduct extends Product {
  id: number;
}