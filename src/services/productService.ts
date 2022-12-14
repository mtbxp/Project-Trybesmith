import * as productModel from '../models/productModel';

import { ProductDetail } from '../interfaces';

export async function create(product: ProductDetail) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}