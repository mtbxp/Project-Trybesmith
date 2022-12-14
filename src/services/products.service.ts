import { NewProduct } from '../types/types';
import * as productsModel from '../models/products.model';

export async function createProduct(newProduct: NewProduct) {
  const createdProduct = await productsModel.createProduct(newProduct);
  return { status: '', message: createdProduct };
}

export async function getAll() {
  const productsList = await productsModel.getAll();
  return { status: '', message: productsList };
}