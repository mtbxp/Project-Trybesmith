import { Product, ProductId } from '../interfaces/interfaces';
import ProductModel from '../models/product.model';

const getAllProducts = async (): Promise<ProductId[]> => {
  const getAll = await ProductModel.getAllProducts();
  return getAll;
};

const createProduct = async (product: Product): Promise<ProductId> => {
  const newProduct = await ProductModel.createProduct(product);
  return newProduct;
};

export default {
  createProduct,
  getAllProducts,
};