import { IProduct } from '../interfaces/index';
import productModel from '../models/products.model';

const create = async (product: IProduct) => {
  const data = await productModel.create(product);
  return {
    status: 201,
    data,
  };
};

export default {
  create,
};
