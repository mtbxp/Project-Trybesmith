import productsModels from '../models/products.models';
import { Product } from '../interfaces/products';

const createNewProducts = async ({ name, amount }: Product): Promise<Product> => {
  const product = await productsModels.createNewProducts({ name, amount });
  return product;
};

export default {
  createNewProducts,
};