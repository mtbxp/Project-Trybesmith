import productsRegistrationModel from '../models/productsModel';
import { Products } from '../interfaces/index';

export default async function productsRegistrationService(product: Products) {
  const result = await productsRegistrationModel(product);
  return result.insertId; 
}