import { TProduct } from '../types';
import * as productsModel from '../models/productsModel';

export default async function insert(post: TProduct): Promise<TProduct> {
  const newProduct = await productsModel.insert(post);
  return newProduct;
}