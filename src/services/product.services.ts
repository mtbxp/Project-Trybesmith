import { Product } from '../interfaces/product.interface';
import * as productModel from '../models/product.model'; 

export async function createProduct(product: Product) {
  const response = await productModel.create(product);
  return response;
}

export async function getAllProducts() {
  const products = await productModel.getAll();
  return products;
}