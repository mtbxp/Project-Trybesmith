import productCreateModel from '../models/product.model';
import Product from '../interface/productInterface';

const productCreateService = async (name: string, amount: string): Promise<Product> => {
  const result = await productCreateModel(name, amount);

  return result;
};

export default productCreateService;