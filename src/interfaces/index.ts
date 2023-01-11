export interface Products {
  name: string;
  amount: string;
}

export interface ProductWithId extends Products {
  id: number;
}

export interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
}