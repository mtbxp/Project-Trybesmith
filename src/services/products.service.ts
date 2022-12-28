import * as productsModel from '../models/products.model';
import { Iproducts, InewProducts } from '../interfaces';

export async function getAll():Promise<Iproducts[]> {
  const products = await productsModel.getAll();
  return products as Iproducts[];
}

export async function createProducts(name: string, amount: string):Promise<InewProducts> {
  const products = await productsModel.createProducts(name, amount);
  return products;
}

export async function getById(id:number): Promise<Iproducts | undefined> {
  const product = await productsModel.getById(id);
  return product;
}
// const getAll = async ():Promise<Tproducts[]> => {
//   const products = await productsModel.getAll();
//   return products;
// };

// export default {
//   getAll,
// };