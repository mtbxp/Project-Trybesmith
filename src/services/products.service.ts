import { ProductReq } from '../interfaces/productsReq.interfaces';
import * as models from '../models/products.models';

export async function postProducts(product: ProductReq): Promise<number> {
  const insertId = await models.postProducts(product);
  return insertId;
}

export async function getProducts() {
  return null;
}