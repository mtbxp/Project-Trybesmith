export type Tproduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type Tuser = {
  id?: number
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type Torders = {
  id: number,
  userId: number,
  productsIds?: number | number[],
};

export type Addorders = {
  userId: number,
  productsIds: number | number[],
};

export type Tlogin = {
  username: string,
  password: string,
};

export type Tpayload = {
  username: string,
  id: number,
};

export type Tmessage = {
  message: string,
};

export type TorderInfos = {
  productsIds: number[],
  userId?: number,
  user?: {
    id?: number
    username: string,
    vocation: string,
    level: number,
    password: string,
  }
};

export type Torder = {
  productsIds: number[]
  id: number
};