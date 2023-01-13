import productsModel from '../models/product.model';
import { TProducts } from '../types/Types';

const getAll = async ():Promise<TProducts[]> => {
  const books = await productsModel.getAll();
  return books;
};

export default {
  getAll,
};