import productsModel from '../models/product.model';
import { IProducts, NewProduct } from '../interfaces/Product.interface';

const addProduct = async (product: NewProduct):Promise<IProducts> => {
  const result = await productsModel.addProduct(product);
  return result;
};

const getAll = async (): Promise<IProducts[]> => {
  const product: IProducts[] = await productsModel.getAll();
  return product;
};

export default {
  addProduct,
  getAll,
};