import productsModel from '../models/productsModel';
import Product from '../types/Product';

const registerProduct = async (body: Product) => {
  const payload:Product = await productsModel.registerProduct(body);

  return payload;
};

const getAllProducts = async (): Promise<Product[]> => {
  const payload: Product[] = await productsModel.getAllProducts();

  return payload;
};

export default {
  registerProduct,
  getAllProducts,
};