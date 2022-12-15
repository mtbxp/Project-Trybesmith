import modelProducts from '../models/products.model';
import { TProduct } from '../types/products.types';

const getAllProducts = async ():Promise<TProduct[]> => {
  const products = await modelProducts.getAllProducts();

  return products;
};

export default {
  getAllProducts,
};