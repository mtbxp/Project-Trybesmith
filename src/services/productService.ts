import productModel from '../models/productModel';
import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const listUsers = await productModel.getAll();
  return listUsers;
};
const createProduct = async (productInfo: TProduct) => {
  const novoProduto = await productModel.createProduct(productInfo);
  return { type: null, message: novoProduto };
};

export default { getAll, createProduct };