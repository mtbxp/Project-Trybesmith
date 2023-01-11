import productModel from '../models/productModel';
import { TProduct } from '../types';

const registerProduct = async (product: TProduct): Promise<TProduct> => {
  const id = await productModel.registerProduct(product);
  return { id, ...product };
};

export default {
  registerProduct,
};
