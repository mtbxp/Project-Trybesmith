import productsModel from '../models/productModel';
import { Product } from '../interfaces/IProducts';

const getAll = async ():Promise<Product[]> => {
  const books = await productsModel.getAll();
  return books;
};

export default {
  getAll,
};