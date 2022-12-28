export interface InewProducts {
  id?: number,
  name: string,
  amount: string,
}

export interface Iproducts extends InewProducts {
  id: number,
  orderId?: string | null
} 

export interface Iorders {
  id: number,
  userId: string,
  productsIds: number[]
}

export interface IuserSafe {
  id?: number,
  username: string,
  vocation: string,
  level: number
}
export interface Iuser extends IuserSafe{
  password: string
}

// "username": "MAX",
// "vocation": "swordsman",
// "level": 10,
// "password": "SavingPeople"