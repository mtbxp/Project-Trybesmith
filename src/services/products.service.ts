import productsModel from '../models/products.model';
import status from '../utils/statusCode';
import { TProduct, TProductResponse } from '../types';

const insert = async (product: TProduct): Promise<TProductResponse> => {
  const productId: number = await productsModel.insert(product);

  const productResponse: TProduct = {
    id: productId,
    name: product.name,
    amount: product.amount,
  };

  return { type: status.HTTP_CREATED, message: productResponse } as TProductResponse;
};

export default {
  insert,
};
