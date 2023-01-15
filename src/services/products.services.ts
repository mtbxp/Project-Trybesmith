import ProductModel from '../models/products.model';
import { Product } from '../interfaces/product.interface';

// CRUD //
const create = async (product: Product):Promise<Product> => {
  const insert = await ProductModel.createProduct(product);
  
  return insert;
};

const getAll = async (): Promise<Product[]> => {
  const allProducts: Product[] = await ProductModel.getAll();
  return allProducts;
};

export default {
  create,
  getAll,
};