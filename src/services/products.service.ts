import productsModel from '../models/products.model';
import Product from '../types/Product';

const getProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getProducts();

  return products;
};

const registerProduct = async (product: Product): Promise<Product> => {
  const newProduct = await productsModel.registerProduct(product);

  return newProduct;
};

export default {
  registerProduct,
  getProducts,
};