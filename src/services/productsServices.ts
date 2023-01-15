import productModel from '../models/productsModels';
import { TProduct } from '../models/interfaceProduct';

const addProductService = async (productData: TProduct): Promise<TProduct> => {
  const newProduct = await productModel.addProductModel(productData);
  return newProduct;
};

export default { addProductService };
