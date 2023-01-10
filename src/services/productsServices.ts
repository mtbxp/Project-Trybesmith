import productsRegistrationModel from '../models/productsModel';
import { Products } from '../interfaces/index';

const productsRegistrationService = async (product: Products) => {
  const result = await productsRegistrationModel(product);
  return result.insertId; 
};

export { productsRegistrationService };