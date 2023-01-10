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
