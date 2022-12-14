import productsModel from '../models/productsModel';
import { IProducts, NewProduct } from '../interfaces/Product';

const addProduct = async (product: NewProduct):Promise<IProducts> => {
  const result = await productsModel.addProduct(product);
  return result;
};

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
};

export default {
  addProduct,
  getAllProducts,
};
