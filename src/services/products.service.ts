import productsModel from '../models/products.model';
import { Tproducts } from '../types';

// async function getAll():Promise<Tproducts[]> {
//   const products = await productsModel.getAll();
//   return products;
// }

const getAll = async ():Promise<Tproducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

export default {
  getAll,
};