import { ProductRequest, Product } from '../interfaces/product.interface';
import productModel from '../models/product.model';

const createProduct = async ({ name, amount }: ProductRequest): Promise<number> => {
  const insertId = await productModel.createProduct({ name, amount });
  return insertId;
};

const getAll = async (): Promise<Product[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { createProduct, getAll };