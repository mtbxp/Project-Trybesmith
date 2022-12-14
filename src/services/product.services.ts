import { Product } from '../interfaces/product.interface';
import * as productModel from '../models/product.model'; 

export const createProduct = async (product: Product) => {
  const response = await productModel.create(product);
  return response;
};

export const getAllProducts = async () => {
  const products = await productModel.getAll();
  return products;
};