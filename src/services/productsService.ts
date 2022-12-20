import * as productsModel from '../models/productsModel';
import { Product } from '../types/index';

export async function getAll(): Promise<Product[]> {
  const products = await productsModel.getAll();
  return products;
}

export async function insertProducts(product: Product): Promise<Product> {
  const products = await productsModel.insertProducts(product);
  return products as Product;
}
