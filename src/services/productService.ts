import * as productModel from '../models/productModel';
// import { Product, ProductStatus } from '../interfaces';

const insertProduct = async (name: string, amount: string) => {
// const insertProduct = async (name: string, amount: string): Promise<ProductStatus> => {
  const newProduct = await productModel.insertProduct(name, amount);

  return { statusCode: 201, newProduct };
  // return newProduct;
};

const getAllProducts = async () => {
  const allProducts = await productModel.getAllProducts();

  return { statusCode: 200, allProducts };
};

export {
  insertProduct,
  getAllProducts,
};