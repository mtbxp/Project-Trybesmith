export interface InewProduct { insertId:number }
export interface Iproduct {
  id?:number,
  name:string,
  amount:string,
  orderId?:number,
}

export interface Iuser { 
  username: string,
  vocation?: string,
  level?: number,
  password: string
}