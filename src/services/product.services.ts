import { Product } from '../interfaces/product.interface';
import * as productModel from '../models/product.model'; 

const createProduct = async (product: Product) => {
  const response = await productModel.create(product);
  return response;
};

export {
  createProduct,
};