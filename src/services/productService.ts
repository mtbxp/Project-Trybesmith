import * as productModel from '../models/productModel';
import { ProductInserted, AllProducts } from '../interfaces';

// const insertProduct = async (name: string, amount: string) => {
const insertProduct = async (name: string, amount: string): Promise<ProductInserted> => {
  const newProduct = await productModel.insertProduct(name, amount);

  return { statusCode: 201, newProduct };
  // return newProduct;
};

const getAllProducts = async (): Promise<AllProducts> => {
  const allProducts = await productModel.getAllProducts();

  return { statusCode: 200, allProducts };
};

export {
  insertProduct,
  getAllProducts,
};