import productsModel from '../models/products.model';
import { TProduct } from '../types/index';

const create = async (product: TProduct) => {
  const data = await productsModel.create(product);
  return { status: 201, data };
};

export default { create };