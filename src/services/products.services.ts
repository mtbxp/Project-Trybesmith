import productsModel from '../models/products.model';
import { TNewProduct, TProducts } from '../types';

const getAll = async (): Promise<TProducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

const insert = async (product: TNewProduct): Promise<TProducts> => {
  const result = await productsModel.insert(product);

  return result;
};

export default { getAll, insert };