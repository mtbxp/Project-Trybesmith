import productsModel from '../models/products.model';
import IProducts from '../interfaces/products.interface';

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
};

export default {
  getAllProducts,
};