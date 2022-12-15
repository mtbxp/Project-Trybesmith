import { productCreateModel, productGetAllModel } from '../models/products.model';
import Product from '../interface/products.interface';

const productCreateService = async (name: string, amount: string): Promise<Product> => {
  const result = await productCreateModel(name, amount);

  return result;
};

const productGetAllService = async (): Promise<Product[]> => {
  const result = await productGetAllModel();

  return result;
};

export { productCreateService, productGetAllService };