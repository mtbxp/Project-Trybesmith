import * as productModel from '../models/productModel';

export default async function listAllProducts() {
  const data = await productModel.listAllProductsModel();
  return { status: 200, data };
}
