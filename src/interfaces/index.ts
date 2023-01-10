export interface Products {
  name: string;
  amount: string;
}

export interface ProductWithId extends Products {
  id: number;
}