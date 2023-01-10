export type Product = null | {
  id?: number;
  name: string;
  amount: string
};

export type Result = {
  err: null | {
    statusCode: number;
  }

  output: string | Product
};

export type User = {
  id?: number;
  username: string;
  vocation: string;
  password: string;
  level: number;
};