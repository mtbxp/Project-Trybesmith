import models from '../models/models';
import { TProduct } from '../types';

const getAlProducts = async (): Promise<TProduct[]> => {
  const products = await models.getAlProducts();
  return products;
};

export default { getAlProducts };