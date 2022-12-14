import * as ProductModel from '../models/product.model';
import { TProduct } from '../types';

export async function create(product:TProduct):Promise<TProduct | null> {
  const NewProduct = await ProductModel.create(product);

  const prod = await ProductModel.getById(NewProduct.insertId);
  return prod;
}

export async function getAll():Promise<TProduct[]> {
  const products = await ProductModel.getAll();

  return products;
}
