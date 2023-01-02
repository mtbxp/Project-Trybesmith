import productsModel from '../models/products.model';
import { NewProduct } from '../types';

export default {
  getProducts: async () => {
    const products = await productsModel.findAll();

    return products;
  },

  createProduct: async (product: NewProduct) => {
    const id = await productsModel.insert(product);

    return { id, ...product };
  },
};