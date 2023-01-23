import IProduct from '../interfaces/product.interface';
import * as Products from '../models/productModel';

export const createProduct = async (prod: IProduct) => {
  const insertId = await Products.createProduct(prod);
  return { status: 201, insertId };
};

export async function getAllProd() {
  const data = await Products.getAllProd();
  return { status: 200, data };
}