import Product from '../interfaces/product.interface';
import productModel from '../models/product.models';

async function postProduct(request: Product): Promise<Product> {
  const result = await productModel.postProduct(request);
  // console.log(result);
  return result;
}

export default {
  // getProductById,
  // getAllProducts,
  postProduct,
  // updateProduct,
};