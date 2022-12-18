import productsModel from '../models/products.model';
import Product from '../types/Product';

const getAllProducts = async (): Promise<Product[]> => {
  const result = await productsModel.getAllProducts();
  return result;
};

export default {
  getAllProducts,
};
