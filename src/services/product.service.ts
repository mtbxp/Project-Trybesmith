import productModel from '../models/product.model';
import { TProduct } from '../models/interfaces/product';

const add = async (productData: TProduct): Promise<TProduct> => {
  const newProduct = await productModel.add(productData);
  return newProduct;
};

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { add, getAll };
