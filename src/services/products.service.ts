import productModel from '../models/products.model';
import Product from '../interfaces/product.interface';

const createProduct = async (product: Product) => {
  const insert = await productModel.createProduct(product);
  return insert;
};

export default {
  createProduct,
};