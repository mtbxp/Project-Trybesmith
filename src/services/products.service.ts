import productsModel from '../models/product.model';
import { IProducts, NewProduct } from '../interfaces/Product.interface';

const addProduct = async (product: NewProduct):Promise<IProducts> => {
  const result = await productsModel.addProduct(product);
  return result;
};

export default {
  addProduct,
};