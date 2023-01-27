import productsModel from '../models/productsModel';
import { Tproduct } from '../types';

const addProducts = async (product: Tproduct): Promise<Tproduct> => {
  const products = await productsModel.addProduct(product);
  return products;
};

const listProducts = async (): Promise<Tproduct[]> => {
  const products = await productsModel.listProducts();
  return products;
};

export default { listProducts, addProducts };
