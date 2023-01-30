import productsModel from '../models/productsModel';
import { Product } from '../types/Product';

const addProduct = async ({ name, amount }: Product): Promise<Product> => {
  const addedProduct = await productsModel.addProduct({ name, amount });
  return addedProduct;
};

export default {
  addProduct,
};