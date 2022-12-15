import * as models from '../models/products.model';
import { TAddProduct, TProducts } from '../types/productsType';

export async function insertProductService(
  name: string,
  amount: string,
): Promise<TAddProduct> {
  const result = await models.insertProduct(name, amount);
  /* console.log('esse vem do model para service', result); */
  return result as TAddProduct;
}

export async function getAll(): Promise<TProducts[]> {
  const result = await models.getAll();
  return result;
}
