import productsModel from '../models/productsModel';
import { TProduts } from '../types';

const productAdd = async (product:TProduts):Promise<TProduts> => {
  const newProduct = await productsModel.productsAdd(product);
  
  return newProduct;
};

export default {

  productAdd,
};