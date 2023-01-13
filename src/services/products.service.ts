import { Product } from '../interfaces/Product';
import productsModel from '../models/products.model';

const addNewProduct = async (product: Product) => {
  const result = await productsModel.addNewProduct(product);

  if (!result.id) return { statusErro: 'NOT_CREATED', response: 'Product not Created' };
  return { statusErro: null, response: result };
};

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return { statusErro: null, response: result };
};

export default {
  addNewProduct,
  getAllProducts,
};