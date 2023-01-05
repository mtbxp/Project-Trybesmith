import productsModels from '../models/products.models';
import { Prods, Products } from '../types/products.types';

const create = async (prod: Prods): Promise<Prods> => {
  const product = await productsModels.create(prod);
  return product;
};

const getAll = async (): Promise<Products[]> => {
  const products = await productsModels.getAll();
  return products;
};

export default {
  create,
  getAll,
};
