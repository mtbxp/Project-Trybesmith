import * as productModel from '../models/productModel';
import { Product } from '../interfaces';

const insertProduct = async (name: string, amount: string): Promise<Product> => {
  const newProduct = await productModel.insertProduct(name, amount);

  return newProduct;
};

export {
  insertProduct,
};