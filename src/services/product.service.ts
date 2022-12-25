import { ProductParameters } from '../interfaces/product.interface';
import createProductModel from '../models/product.models';

const createProductService = async (product: ProductParameters) => {
  const newProduct = await createProductModel(product);
  return newProduct;
};

export default createProductService;
