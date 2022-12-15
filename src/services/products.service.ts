import model from '../models/products.model';
import { TProducts } from '../types';

async function createProductService(name: string, amount: string): Promise<TProducts> {
  const products = await model.createProduct(name, amount);
  return products;
}

const getAllProductsService = async (): Promise<TProducts> => {
  const products = await model.getAllProducts();

  return products;
};

export default {
  createProductService,
  getAllProductsService,
};