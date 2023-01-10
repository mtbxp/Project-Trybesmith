import productModel from '../models/productsModel';
import { IProduct } from '../interfaces';

const registerProduct = async (product: IProduct) => {
  const result = await productModel.registerProduct(product);
  return { status: 201, message: result };
};

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return { status: 200, message: products };
};

export default { 
  registerProduct,
  getAllProducts,
};
