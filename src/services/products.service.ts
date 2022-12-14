import { Tproducts } from '../models/interfaces';
import ProductsModel from '../models/products.model';

const addNewProduct = async (newProduct: Tproducts): Promise<Tproducts> => {
  const idNewProduct: number = await ProductsModel.insertNewProduct(newProduct);
  const newUser: Tproducts = {
    id: idNewProduct,
    name: newProduct.name,
    amount: newProduct.amount,
  };  
  return newUser;
};

const getAllProducts = async (newProduct: Tproducts): Promise<Tproducts> => {
  const idNewProduct: number = await ProductsModel.insertNewProduct(newProduct);
  const newUser: Tproducts = {
    id: idNewProduct,
    name: newProduct.name,
    amount: newProduct.amount,
  };  
  return newUser;
};

export default { addNewProduct };