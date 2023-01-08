import productsModel from '../models/productsModel';
import Product from '../types/Product';

const registerProduct = async (body: Product) => {
  console.log('body', body);
  const payload:Product = await productsModel.registerProduct(body);

  return payload;
};

export default {
  registerProduct,
};