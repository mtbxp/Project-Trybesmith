import * as productsModel from '../models/products.model';
import { Iproducts } from '../interfaces';

export async function getAll():Promise<Iproducts[]> {
  const products = await productsModel.getAll();
  return products as Iproducts[];
}

export async function createProducts(name: string, amount: string):Promise<Iproducts[]> {
  const products = await productsModel.createProducts(name, amount);
  return products as Iproducts[];
}
// const getAll = async ():Promise<Tproducts[]> => {
//   const products = await productsModel.getAll();
//   return products;
// };

// export default {
//   getAll,
// };