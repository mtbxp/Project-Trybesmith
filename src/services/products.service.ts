import { NewProduct } from '../interfaces/types';
import * as modelProducts from '../models/products.model';

export async function getAllProducts() {
  const prodList = await modelProducts.getAllProducts();
  return { status: '', message: prodList };
}

export async function addNewProduct(newProduct: NewProduct) {
  const addProd = await modelProducts.addNewProduct(newProduct);
  return { status: '', message: addProd };
}