import listAllProductsModel from '../models/productModel';

export default async function listAllProducts() {
  const data = await listAllProductsModel();
  return { status: 200, data };
}
