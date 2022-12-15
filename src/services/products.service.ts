import model, { Product } from '../models/products.model';

async function createProductService(name: string, amount: string): Promise<Product> {
  const products = await model.createProduct(name, amount);
  return products;
}

const getAllProductsService = async (): Promise<Product> => {
  const products = await model.getAllProducts();

  return products;
};

export default {
  createProductService,
  getAllProductsService,
};