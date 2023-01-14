import productModel from '../models/productsModel';
import { IProduct } from '../interfaces';

const registerProduct = async (product: IProduct) => {
  const result = await productModel.registerProduct(product);

  return result;
};

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();

  return products;
};

export default { 
  registerProduct,
  getAllProducts,
};
