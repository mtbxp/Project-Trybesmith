import productModel from '../models/productModel';
import { TProduct } from '../types';

const registerProduct = async (product: TProduct): Promise<TProduct> => {
  const id = await productModel.registerProduct(product);
  return { id, ...product };
};

const getProducts = async () => {
  const products = await productModel.getProducts();
  return products;
};

export default {
  registerProduct,
  getProducts,
};
