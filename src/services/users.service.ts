import { TPessoa } from '../interfaces/types';

import insertUsers from '../models/users.model';

export default async function insertProductService(pessoa:TPessoa): Promise<TPessoa> {
  const returnProducts = await insertUsers(pessoa);

  return returnProducts;
}
