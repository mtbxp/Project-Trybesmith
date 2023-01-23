import productsModel from '../models/products.model';
import Product from '../types/Product';

const registerProduct = async (product: Product): Promise<Product> => {
  const newProduct = await productsModel.registerProduct(product);

  return newProduct;
};

export default {
  registerProduct, 
};