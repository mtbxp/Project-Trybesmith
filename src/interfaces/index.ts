export interface InterfaceProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
}

export interface InterfaceUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: number
}

export interface InterfaceOrder {
  id?: number,
  userId: number,
  productsIds: [number],
}
