import productsModel from '../models/products.model';
import { TProducts } from '../type';

const insertNewProductService = async (newProduct:TProducts):Promise<TProducts | null> => {
  const createNewProduct = await productsModel.insertNewProduct(newProduct);
  console.log('RETORNO DE CREATE SERVICE', createNewProduct);
  
  return { name: newProduct.name, amount: newProduct.amount };
};

export default { insertNewProductService };