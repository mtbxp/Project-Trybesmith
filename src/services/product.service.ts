import { Product, ProductId } from '../interfaces/interfaces';
import ProductModel from '../models/product.model';

const createProduct = async (product: Product): Promise<ProductId> => {
  const newProduct = await ProductModel.createProduct(product);
  return newProduct;
};

export default {
  createProduct,
};