export interface Itoken {token?: string}
export interface Ierror {error?:boolean, message?:string}
export type TtokenOrError = Itoken & Ierror;
export interface InewThing { insertId:number }

export interface Iorder {
  id:number,
  userId:number,
  productsIds: number[],
}

export interface Iproduct {
  id?:number,
  name:string,
  amount:string,
  orderId?:number,
}

export interface Iuser { 
  id?: number,
  username: string,
  vocation?: string,
  level?: number,
  password: string
}