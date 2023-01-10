import productsModel from '../models/products.model';
import { TProducts } from '../types';

const getProducts = async (): Promise<TProducts[]> => {
  const products = await productsModel.getProducts();
  return products;
};

const insertProduct = async (newProduct: TProducts) => {
  const insert = await productsModel.insertProduct(newProduct);

  const getNewProduct = insert.find((prod) => prod.name === newProduct.name);

  if (!getNewProduct) return { type: 404, message: 'Product not Register' };

  return { type: null, message: getNewProduct };
};

export default {
  getProducts,
  insertProduct,
};