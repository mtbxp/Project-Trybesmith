import productModel from '../models/productModel';
import Product from '../types/Product';

const addProduct = async (product: Product) => {
  const addedProduct = await productModel.addProduct(product);
  return addedProduct;
};

const getAllProducts = async ():Promise<Product[]> => {
  const allProducts = await productModel.getAllProducts();
  return allProducts;
};

export default { 
  addProduct,
  getAllProducts };