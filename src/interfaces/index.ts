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