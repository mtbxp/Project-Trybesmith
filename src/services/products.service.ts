import productsModel from "../models/products.model";
import { TProducts } from "../types";

const getAllProducts = async (): Promise<TProducts[]> => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

export default { getAllProducts };
