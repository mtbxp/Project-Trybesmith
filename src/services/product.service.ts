import { IProduct } from '../types/index';
import productModel from '../models/product.model';
import validateNewProduct from '../validations/validationsInputValues';

const create = async (product: IProduct) => {
  const error = validateNewProduct(product);
  if (error.type) {
    return {
      status: Number(error.type),
      error: { message: error.message },
    };
  }
  const data = await productModel.create(product);
  return {
    status: 201,
    data,
  };
};

const getAll = async () => {
  const data = await productModel.getAll();
  return { status: 200, 
    data };
};

export default {
  create,
  getAll,
};
