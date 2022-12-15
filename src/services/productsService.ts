import { TProduct } from '../types';
import * as productsModel from '../models/productsModel';

export const insertProductS = async (body: TProduct): Promise<TProduct> => {
  const result = await productsModel.insert(body);
  return result;
};

export const getAllProductS = async (): Promise<TProduct[]> => {
  const result = await productsModel.getAll();
  return result;
};