import * as productModel from '../models/productModel';
import { ProductDetail } from '../interfaces/index';

export async function listAllProducts() {
  const data = await productModel.listAllProductsModel();
  return { status: 200, data };
}

export async function create(product: ProductDetail) {
  const data = await productModel.create(product);
  return { status: 201, data };
}
