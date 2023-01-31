export interface OrderData {
  productsIds: number[],
  userId?: number,
  user?: {
    id?: number
    username: string,
    vocation: string,
    level: number,
    password: string,
  }
}