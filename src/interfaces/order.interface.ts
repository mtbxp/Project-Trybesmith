export interface Order {
  id?: number;
  user_id: string;
}

export interface FullOrder extends Order {
  productsIds: number[]
}
