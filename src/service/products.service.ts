import productsModel from '../models/products.model';
import { TProducts } from '../type';

const insertNewProductService = async (newProduct:TProducts):Promise<TProducts | null> => {
  const createNewProduct = await productsModel.insertNewProduct(newProduct);
  console.log('RETORNO DE CREATE SERVICE', createNewProduct);
  
  return { id: createNewProduct.insertId, name: newProduct.name, amount: newProduct.amount };
};

const selectAllProductsService = async () => {
  const getAllProducts = await productsModel.selectAllProducts();
  console.log('RETORNO DE getAllProducts SERVICE', getAllProducts);
  
  return getAllProducts;
};

export default { insertNewProductService, selectAllProductsService };