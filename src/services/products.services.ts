import productsModel from '../models/products.model';
import { TProducts } from '../types';

const getAll = async (): Promise<TProducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

export default { getAll };