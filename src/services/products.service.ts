import { ResultSetHeader, RowDataPacket } from 'mysql2';
import {
  registerProductModel,
  getAllProductsModel,
} from '../models/products.model';

export const registerProductService = async (
  name:string,
  amount:string,
): Promise<ResultSetHeader[]> => {
  const product = await registerProductModel(name, amount);
  return product as ResultSetHeader[];
};

export const getAllProductsService = async (): Promise<RowDataPacket[]> => {
  const allProducts = await getAllProductsModel();
  return allProducts as RowDataPacket[];
};