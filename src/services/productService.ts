import productsModel from '../models/productModel';
import IProducts from '../interfaces/IProducts';

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
};

export default {
  getAllProducts,
};