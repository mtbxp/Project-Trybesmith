import Product from '../interfaces/product.interface';
import productModel from '../models/product.models';

async function postProduct(request: Product): Promise<Product> {
  const result = await productModel.postProduct(request);
  // console.log(result);
  return result;
}

async function getAllProducts(): Promise<Product[]> {
  const result = await productModel.getAllProducts();
  return result;
}

export default {
  // getProductById,
  getAllProducts,
  postProduct,
  // updateProduct,
};