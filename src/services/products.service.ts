import modelProducts from '../models/modelProducts';
import { TProducts } from '../types/products.type';

async function insertProducts(name: string, amount: string): Promise<TProducts> {
  const result = await modelProducts(name, amount);

  return result as TProducts;
}

export default insertProducts;