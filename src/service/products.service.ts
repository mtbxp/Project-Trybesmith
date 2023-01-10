import productsModel from '../models/products.model';
import { TProducts } from '../types';

const getProducts = async (): Promise<TProducts[]> => {
  const products = await productsModel.getProducts();
  return products;
};

const insertProduct = async (newProduct: TProducts) => {
  const insert = await productsModel.insertProduct(newProduct);

  return { type: null, message: insert };
};

export default {
  getProducts,
  insertProduct,
};