import productsModel from '../models/productsModel';
import IProducts from '../interfaces/IProduct';

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
};

export default {
  getAllProducts,
};