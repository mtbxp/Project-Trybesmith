import * as productsModels from '../models/productsModels';
import { TProducts } from '../types';

export async function createNewProduct(name: string, amount: string) {
  const createProducts = await productsModels.createProduct(name, amount);
  return createProducts;
}

export async function getAll(): Promise<TProducts[]> {
  const Allproducts = await productsModels.getALlProducts();
  return Allproducts;
}