import { CreatedProduct, NewProduct } from '../interfaces/Product';
import { InternalErrResponse } from '../interfaces/Responses';
import createProduct from '../models/products.model';
import internalErrResponse from '../utils/responses';

export default async function addProduct(product: NewProduct):
Promise<CreatedProduct | InternalErrResponse> {
  try {
    const createdProduct = await createProduct(product);
    return createdProduct;
  } catch (err: unknown) {
    return internalErrResponse(err);
  }
}
