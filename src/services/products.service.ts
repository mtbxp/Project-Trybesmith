import productsModel from '../models/products.model';
import { NewProduct } from '../types';

export default {
  createProduct: async (product: NewProduct) => {
    const id = await productsModel.insert(product);

    return { id, ...product };
  },
};