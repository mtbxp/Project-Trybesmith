export interface Product {
  name: string;
  amount: number;
}

export interface IProduct extends Product {
  id: number;
}

export interface Status {
  status: number;
}

export interface ProductService extends Status {
  result: IProduct;
}