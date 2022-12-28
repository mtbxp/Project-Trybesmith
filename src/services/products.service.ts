import { CreatedProduct, NewProduct, Product } from '../interfaces/Product';
import { InternalErrResponse } from '../interfaces/Responses';
import { createProduct, findAllProducts } from '../models/products.model';
import internalErrResponse from '../utils/responses';

export async function addProduct(product: NewProduct):
Promise<CreatedProduct | InternalErrResponse> {
  try {
    const createdProduct = await createProduct(product);
    return createdProduct;
  } catch (err: unknown) {
    return internalErrResponse(err);
  }
}

export async function findProducts():
Promise<Product[] | InternalErrResponse> {
  try {
    const products = await findAllProducts();
    return products;
  } catch (err: unknown) {
    return internalErrResponse(err);
  }
}
