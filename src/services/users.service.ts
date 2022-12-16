import { TPessoa } from '../interfaces/types';

import * as usersModel from '../models/users.model';

export async function insertProductService(pessoa:TPessoa): Promise<TPessoa> {
  const returnProducts = await usersModel.insertUsers(pessoa);

  return returnProducts;
}

export async function getAll(): Promise<TPessoa[]> {  
  const result = await getAll();

  return result;
} 