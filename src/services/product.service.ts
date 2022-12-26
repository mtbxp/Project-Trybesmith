import { ProductParameters } from '../interfaces/product.interface';
import productModel from '../models/product.models';

const createProductService = async (product: ProductParameters) => {
  const newProduct = await productModel.createProductModel(product);
  return newProduct;
};

const getAllProductsService = async () => {
  const allProducts = await productModel.getAllProductsModel();
  return allProducts;
};

export default {
  createProductService,
  getAllProductsService,
};
