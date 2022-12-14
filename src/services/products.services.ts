import InterfaceProduct from '../interfaces';
import productModel from '../models/products.models';

const addProduct = async (product: InterfaceProduct) => {
  const result = await productModel.addProduct(product);
  return { status: 201 as number, result };
};

const getAllProducts = async () => {
  const result = await productModel.getAllProducts();
  return { status: 200 as number, result };
};

export default {
  addProduct,
  getAllProducts,
};
