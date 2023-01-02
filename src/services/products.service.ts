import productsModel from '../models/products.model';
import { NewProduct, Product } from '../types';

export default {
  getProducts: async (): Promise<Product[]> => {
    const products = await productsModel.findAll();

    return products;
  },

  createProduct: async (product: NewProduct): Promise<Product> => {
    const id = await productsModel.insert(product);

    return { id, ...product };
  },
};