import productsModel from '../models/productsModel';
import { Product } from '../types';

const createProduct = async (product: Product): Promise<Product> => {
  const result = await productsModel.createProduct(product);
  return result;
};

export default {
  createProduct,
};