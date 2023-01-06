import productsModel from '../models/productsModel';
import { TProduts } from '../types';

const productAdd = async (product:TProduts):Promise<TProduts> => {
  const newProduct = await productsModel.productsAdd(product);
  
  return newProduct;
};
const getAll = async (): Promise<TProduts[]> => {
  const products = await productsModel.getAll();
  console.log('service', products);
  return products;
};

export default {
  productAdd,
  getAll,
};