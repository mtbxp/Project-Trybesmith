import productsModel from '../models/products.model';
import { NewProduct, TProduct } from '../types/types';

const getAll = async ():Promise<TProduct[]> => {
  const products = await productsModel.getAll();
  return products;
};

const create = async (product: NewProduct):Promise<TProduct> => {
  const productCreated = await productsModel.create(product);
  return productCreated;
};

export default {
  getAll,
  create,
};