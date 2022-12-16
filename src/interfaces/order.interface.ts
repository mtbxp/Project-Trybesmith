// export interface Orders {
//   id: number;
//   userId: number;
//   productsIds: number[];

// }

export interface NewOrder {
  productsIds: number[];
}

export interface Order {
  id?: number;
  userId: number
  productsIds: number[]

}