export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface ProductInserted {
  statusCode: number;
  newProduct: Product;
}

export interface AllProducts {
  statusCode: number;
  allProducts: Product[];
}

export interface User {
  id?: number;
  username: string;
  vocation?: string;
  level?: number;
  password?: string;
}

export interface UserInserted {
  statusCode: number;
  token: string;
}

export interface Orders {
  id: number;
  userId: number;
  productsIds: number[];
}
