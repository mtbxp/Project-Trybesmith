import productsModel from '../models/products.model';
import HttpException from '../shared/http.exception';
import { TProduct } from '../types';

const createProduct = async (product: TProduct):Promise<TProduct> => {
  try {
    const productCreated = await productsModel.createProductModel(product);
    return productCreated;
  } catch (error) {
    throw new HttpException(400, 'Product creation failed');
  }
};

const getAllProducts = async () => {
  try {
    const productsList = await productsModel.getAllProducts();
    return productsList;
  } catch (error) {
    throw new HttpException(400, 'Products not found');
  }
};

export default { createProduct, getAllProducts };