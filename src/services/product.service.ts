import productModel from '../models/product.model';
import { TProduct } from '../models/interfaces/product';

const add = async (productData: TProduct): Promise<TProduct> => {
  const newProduct = await productModel.add(productData);
  return newProduct;
};

export default { add };
