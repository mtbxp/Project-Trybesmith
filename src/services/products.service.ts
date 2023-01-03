import productsModel from '../models/products.model';
import IProducts, { NewProduct } from '../interfaces/products.interface';

const insertProduct = async (productValues: IProducts): Promise<NewProduct> => {
  const product: NewProduct = await productsModel.insertProduct(productValues);
  return product;
};

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
};

export default {
  insertProduct,
  getAllProducts,
};