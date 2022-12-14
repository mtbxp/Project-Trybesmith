import productsModel from '../models/products.model';
import { TProducts } from '../types/types';

const getAll = async ():Promise<TProducts[]> => {
  const books = await productsModel.getAll();
  return books;
};

export default {
  getAll,
};