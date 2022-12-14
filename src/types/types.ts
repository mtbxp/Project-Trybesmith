export type Tproducts = {  

  id?: number,
  name: string,
  amount: string,
  orderId?: number,

};

export type Tuser = { 
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type Torders = {

  id?: number,
  userId: number,

};

export type TLogin = {

  id?: number,
  username: string,
  password: string,

};