import * as productsModel from '../models/productsModel';
import { Tproduct } from '../types';

export async function getAll(): Promise<Tproduct[]> {
  const products = await productsModel.getAll();
  return products;
}

export async function insertProducts(product: Tproduct): Promise<Tproduct> {
  const products = await productsModel.insertProducts(product);
  return products as Tproduct;
}
