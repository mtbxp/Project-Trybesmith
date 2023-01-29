import productsModel from "../models/products.model";
import { TProducts } from "../types";

const getAllProducts = async (): Promise<TProducts[]> => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const createProduct = async (productInfo: TProducts): Promise<TProducts> => {
  const results = productsModel.createProduct(productInfo);
  return results;
};

export default { getAllProducts, createProduct };
