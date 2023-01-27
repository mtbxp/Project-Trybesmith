import * as productsModel from '../models/products.model';
import { Product } from '../types';

const addProduct = async (product: Product) => {
  const insertId = await productsModel.addProduct(product);
  return insertId;
};

const listAllProducts = async () => {
  const products = await productsModel.listAllProducts();
  return products;
};

export {
  addProduct,
  listAllProducts,
};