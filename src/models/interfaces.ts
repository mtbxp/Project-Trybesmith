export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string
};

export type TOrders = {
  id?: number,
  userId: string,
  productsIds?: Array<number>,   
};

export type Tproducts = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,  
};

export type TLogin = {
  userName: string,
  password: string
};