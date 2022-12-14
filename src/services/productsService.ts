import { Product } from '../interfaces/interfaces';
import productModel from '../models/productsModel';

async function addProduct(product: Product) {
  const result = await productModel.addProd(product);
  return result;
}

async function getAllProds() {
  const result = await productModel.getAllProds();
  return result;
}

export default {
  addProduct,
  getAllProds,
};
