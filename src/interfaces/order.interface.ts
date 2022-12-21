export interface IOrder {
  id?: number,
  userId?: number,
}

export interface INewOrder {
  userId: number,
  productsIds: number[],

}