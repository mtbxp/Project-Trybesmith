import { TProduct } from '../types';
import productModel from '../models/productsModel';

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { getAll };