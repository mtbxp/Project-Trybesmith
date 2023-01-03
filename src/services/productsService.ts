import Product from '../Interfaces/products.Interface';
import * as productsModel from '../models/productsModel'; 

export default async function createProduct(product: Product): Promise<Product> {
  const newProduct = await productsModel.create(product);
  const { id, name, amount } = newProduct as Product;
  const payload = { id, name, amount };
  return payload;
}