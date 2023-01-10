import productModel from '../models/products.model';
import { Product } from '../types';

export default {
  findAll: async () => {
    const [result] = await productModel.findAll();
    
    return { err: null, output: result };
  },

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