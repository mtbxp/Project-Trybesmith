import productsModel from '../models/productsModel';
import { Product } from '../types';

const createProduct = async (product: Product): Promise<Product> => {
  const result = await productsModel.createProduct(product);
  return result;
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await productsModel.getAllProducts();
  return result;
};

export default {
  createProduct,
  getAllProducts,
};