export interface ProductParameters {
  name: string,
  amount: number,
}

export interface Product extends ProductParameters {
  id: number,
}
