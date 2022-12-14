import { TProduct } from '../types';
import productModel from '../models/productModel';

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const create = async (product: TProduct) => {
  const data = await productModel.create(product);
  return { status: 201, data };
};

export default { getAll, create };