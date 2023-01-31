import productsModel from '../models/products.model';
import { Products, NewProduct } from '../interfaces/product';

const newProduct = async (product: NewProduct):Promise<Products> => {
  const result = await productsModel.newProduct(product);
  return result;
};

const getAllProducts = async (): Promise<Products[]> => {
  const products: Products[] = await productsModel.getAllProducts();
  return products;
};

export default {
  newProduct,
  getAllProducts,
};