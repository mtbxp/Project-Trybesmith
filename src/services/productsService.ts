import * as productsModel from '../models/productsModel';
import { Tproducts } from '../types/types';

const getAllService = async (): Promise<Tproducts[]> => {
  const results = await productsModel.default.getAll();
  return results;
};

const createService = async (products: Tproducts) => {
  const data = await productsModel.default.createProduct(products);
  return { status: 201, data };
};

export default {
  getAllService,
  createService,
};