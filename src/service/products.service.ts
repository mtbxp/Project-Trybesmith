import { INewProduct } from '../types/types';
import * as productsModel from '../models/products.model';

export async function addNewProduct(product:INewProduct) {
  const newProduct = await productsModel.addNew(product);
  return { type: null, message: newProduct };  
}

export async function getAllProducts() {
  const allProducts = await productsModel.getAll();
  return { type: null, message: allProducts };
}