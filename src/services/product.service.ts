import { productCreateModel, productGetAllModel } from '../models/product.model';
import Product from '../interface/productInterface';

const productCreateService = async (name: string, amount: string): Promise<Product> => {
  const result = await productCreateModel(name, amount);

  return result;
};

const productGetAllService = async (): Promise<Product[]> => {
  const result = await productGetAllModel();

  return result;
};

export { productCreateService, productGetAllService };