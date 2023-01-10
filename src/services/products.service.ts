import productModel from '../models/products.model';
import { Product } from '../types';

export default {
  create: async (product: Product) => {
    const rows = await productModel.create(product);
    const newProduct = await productModel.findByPk(rows?.insertId);

    if (!newProduct) {
      return { 
        err: { statusCode: 400 }, 
        output: 'Não foi possível adicionar o produto.' };  
    }

    return { err: null, output: newProduct };
  },
};