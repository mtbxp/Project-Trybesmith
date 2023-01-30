import productsModel from '../models/productsModel';
import { Product } from '../types/Product';

const addProduct = async ({ name, amount }: Product): Promise<Product> => {
  const addedProduct = await productsModel.addProduct({ name, amount });
  return addedProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const searchedProducts = await productsModel.getAllProducts();
  return searchedProducts;
};

export default {
  addProduct,
  getAllProducts,
};