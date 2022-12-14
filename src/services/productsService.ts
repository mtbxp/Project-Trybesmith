import * as productsModel from '../models/productsModel';
import { TProduct } from '../types';

export async function getAll(): Promise<TProduct[]> {
  const products = await productsModel.getAll();
  return products;
}

export async function insertProduct(products: TProduct) {
  await Promise.all([products].map(async (product) => productsModel.insertProduct(product)));
  const allProducts = await productsModel.getAll();
  const insertedProduct = allProducts.length - 1;
  
  return allProducts[insertedProduct];
}