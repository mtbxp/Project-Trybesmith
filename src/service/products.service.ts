import { INewProduct } from '../types/types';
import * as productsModel from '../models/products.model';

export default async function addNewProduct(product:INewProduct) {
  const newProduct = await productsModel.default(product);
  return { type: null, message: newProduct };  
}