import IProduct from '../interfaces/product.interface';
import * as Products from '../models/productModel';

// eslint-disable-next-line import/prefer-default-export
export const createProduct = async (prod: IProduct) => {
  const insertId = await Products.createProduct(prod);
  return { status: 201, insertId };
};