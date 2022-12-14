import { TProduct } from '../types';
import * as productsModel from '../models/productsModel';

export async function insert(post: TProduct): Promise<TProduct> {
  const newProduct = await productsModel.insert(post);
  return newProduct;
}

export async function getAll(): Promise<TProduct[]> {
  const products = await productsModel.getAll();
  return products;
}