import insertProduct from '../models/products.model';
import { TAddProduct } from '../types/productsType';

export default async function insertProductService(
  name: string,
  amount: string,
): Promise<TAddProduct> {
  const result = await insertProduct(name, amount);
  /* console.log('esse vem do model para service', result); */
  return result as TAddProduct;
}
