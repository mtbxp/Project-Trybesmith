import { ProductParameters } from '../interfaces/product.interface';
import productModel from '../models/product.models';

const createProductService = async (product: ProductParameters) => {
  const newProduct = await productModel.createProductModel(product);
  return newProduct;
};

export default {
  createProductService,
};
