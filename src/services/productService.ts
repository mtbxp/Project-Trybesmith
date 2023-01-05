import mo from '../models/productModel';
import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const listUsers = await mo.getAll();
  return listUsers;
};
const createProduct = async (productInfo: TProduct) => {
  const novoProduto = await mo.createProduct(productInfo);
  return { type: null, message: novoProduto };
};

export default { getAll, createProduct };