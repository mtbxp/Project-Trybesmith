import ProductModel from '../models/products.model';
import { Product } from '../interfaces/product.interface';

// CRUD //
const create = async (product: Product):Promise<Product> => {
  const insert = await ProductModel.createProduct(product);
  
  return insert;
};

export default {
  create,
};