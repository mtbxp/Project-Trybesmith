export interface UserCredential {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IUser extends UserCredential {
  id: number;
}

export interface ProductDetail {
  name: string,
  amount: string,
}

export interface IProduct extends ProductDetail {
  id: number,
  name: string,
  amount: string,
}
