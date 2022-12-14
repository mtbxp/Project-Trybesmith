import * as productsModel from '../models/products.model';
import { Product, ProductInput } from '../types';

async function createProduct({ amount, name }: ProductInput): Promise<Product> {
  const id = await productsModel.createProduct({ amount, name });

  return {
    id,
    name,
    amount,
    orderId: null,
  };
}

async function getAllProducts(): Promise<Product[]> {
  return productsModel.getAllProducts();
}

export { createProduct, getAllProducts };
