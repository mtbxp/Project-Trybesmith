import productsModel from '../models/products.model';
import Product from '../types/Product';

const registerProduct = async (product: Product) => {
  const registeredProduct = await productsModel.registerProduct(product);
  return registeredProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await productsModel.getAllProducts();
  return result;
};

export default {
  getAllProducts,
  registerProduct,
};
