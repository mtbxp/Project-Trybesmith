import { RowDataPacket } from 'mysql2/promise';
import { productsRegistrationModel, getProductsModel } from '../models/productsModel';
import { Products } from '../interfaces/index';

export async function productsRegistrationService(product: Products): Promise<number> {
  const result = await productsRegistrationModel(product);
  return result.insertId; 
}

export async function getProductsService(): Promise<RowDataPacket[]> {
  const result = await getProductsModel();
  return result; 
}