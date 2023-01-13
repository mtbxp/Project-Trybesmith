import { Product, ProductR } from '../interfaces/Product';
import productsModel from '../models/products.model';

const addNewProduct = async (product: Product): Promise<ProductR> => {
  const result = await productsModel.addNewProduct(product);
  return result;
};

export default {
  addNewProduct,
  getAllProducts,
};