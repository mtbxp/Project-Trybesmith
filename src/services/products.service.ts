import { TProducts } from '../interfaces/types';

import * as productsModel from '../models/products.model';

export async function insertProduct(product:TProducts): Promise<TProducts> {
  const returnProducts = await productsModel.insertProduct(product);

  return returnProducts;
}

export async function getAll(): Promise<TProducts[]> {
  const result = await productsModel.getAll();

  return result;
}