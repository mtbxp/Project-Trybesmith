import { NewProduct } from '../interfaces/Product';
import { DefaultHttpResponse, InternalErrResponse } from '../interfaces/Responses';
import { createProduct, findAllProducts } from '../models/products.model';
import { defaultHttpResponse, internalErrResponse } from '../utils/responses';

export async function addProduct(product: NewProduct):
Promise<DefaultHttpResponse | InternalErrResponse> {
  try {
    const createdProduct = await createProduct(product);
    if (createdProduct) {
      return defaultHttpResponse(201, createdProduct);
    }
    const errMessage = { message: 'Produto não cadastrado, database ERROR' };
    return defaultHttpResponse(500, errMessage);
  } catch (err: unknown) {
    return internalErrResponse(err);
  }
}

export async function findProducts():
Promise<DefaultHttpResponse | InternalErrResponse> {
  try {
    const products = await findAllProducts();
    return defaultHttpResponse(200, products);
  } catch (err) {
    return internalErrResponse(err);
  }
}
