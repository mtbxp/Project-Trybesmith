import * as productsModel from '../models/products.model';
import { Product } from '../types';

const addProduct = async (product: Product) => {
  const insertId = await productsModel.addProduct(product);
  return insertId;
};

const a = () => {};

export {
  addProduct,
  a,
};