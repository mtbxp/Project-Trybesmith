import * as modelProducts from '../models/modelProducts';
import { TOrder } from '../types/orders.type';
import { TProducts } from '../types/products.type';

export async function insertProduct(name: string, amount: string): Promise<TProducts> {
  const result = await modelProducts.insertProducts(name, amount);

  return result as TProducts;
}

export async function getAllProducts(): Promise<TOrder[]> {
  const allProducts = await modelProducts.getAllProducts();

  return allProducts;
}