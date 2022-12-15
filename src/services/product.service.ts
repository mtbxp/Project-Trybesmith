import { ProductRequest } from '../interfaces/product.interface';
import productModel from '../models/product.model';

const createProduct = async ({ name, amount }: ProductRequest) => {
  const insertId = await productModel.createProduct({ name, amount });
  return insertId;
};

export default { createProduct };