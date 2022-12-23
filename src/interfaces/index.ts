export interface IProduct {
  id?: number,
  name: string,
  amount: number,
  orderId?: number,
}

export interface IProductReturn {
  status: number,
  message: string | IProduct | IProduct[], 
}

export interface IUserWithoutPassword {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}

export interface IUser extends IUserWithoutPassword {
  password: string,
}

export interface IUserReturn {
  status: number,
  message: string,
}

export interface IOrder {
  id: number,
  userId: number,
}

export interface ILogin {
  username: string,
  password: string,
  id?: number,
}

export interface ILoginWithoutPassword {
  username: string,
  id?: number,
}

export interface ILoginReturn {
  status: number,
  error: boolean,
  message: ILogin | string,
}