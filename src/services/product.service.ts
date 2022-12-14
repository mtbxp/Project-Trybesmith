import { Product, ProductService } from '../interfaces';
import * as productModel from '../models/product.model';

export async function create(product: Product): Promise<ProductService> {
  const [result] = await productModel.create(product);
  return { status: 201, result };
}

export async function getAll(): Promise<ProductService> {
  const [result] = await productModel.getAll();
  return { status: 200, result };
}