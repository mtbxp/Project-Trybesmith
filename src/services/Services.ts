import models from '../models/models';
import { TProduct } from '../types';

const getAlProducts = async (): Promise<TProduct[]> => {
  const products = await models.getAlProducts();
  return products;
};

const insertProduct = async (product:any) => {
  await Promise.all([product].map(async (p) => models.insertProduct(p)));  
  const getAllProducts = await models.getAlProducts();
  const result = getAllProducts.length - 1;
  
  return { type: null, message: getAllProducts[result] };
};

export default { getAlProducts, insertProduct };