import model from '../models/products.model';
import { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const allProducts = await model.getAllProducts();
  return allProducts; 
};

const addNewProduct = async (newProduct: Product) => {
  const product = await model.addNewProduct(newProduct);
  return product;
};

export default {
  getAllProducts,
  addNewProduct,
};