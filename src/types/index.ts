export type TProduct = {
  id?: string
  name: string,
  amount: string,
};

export type User = { 
  username: string,
  vocation: string,
  level: number,
  password: string
};

export type Order = { 
  id?: number,
  userId: number,
  productsIds: number[]
};