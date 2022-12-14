import productsModel from '../model/products.model';
import { TProduct } from '../types';

const createProductService = async (product: TProduct): Promise<TProduct> => {
  const productCreated = await productsModel.createProductModel(product);

  return productCreated;
};

export default createProductService;