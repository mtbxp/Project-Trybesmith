import productModel from '../models/productModel';
import { TProduct, NewProduct } from '../types/types';

const productCadastro = async (product: NewProduct):Promise<TProduct> => {
  const criandoTodosProdutos = await productModel.productCadastro(product);
  return criandoTodosProdutos;
};
const getAll = async ():Promise<TProduct[]> => {
  const listagem = await productModel.getAll();
  return listagem;
};

export default {
  getAll,
  productCadastro,
};