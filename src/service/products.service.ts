import productsModel from '../models/product.model';
import { TProduct, NewProduct } from '../types/Types';

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