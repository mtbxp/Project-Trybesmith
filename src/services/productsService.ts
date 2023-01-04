import Product from '../Interfaces/products.Interface';
import * as productsModel from '../models/productsModel'; 

export async function createProduct(product: Product): Promise<Product> {
  const newProduct = await productsModel.create(product);
  const { id, name, amount } = newProduct as Product;
  const payload = { id, name, amount };
  return payload;
}

export async function getProducts(): Promise<Product[]> {
  const products: Product[] = await productsModel.getProducts();
  return products;
}
