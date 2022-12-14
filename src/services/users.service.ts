import * as usersModels from '../models/users.model';
import { encode } from '../libs/token';
import { UserInput } from '../types';

async function createUser({ level, password, username, vocation }: UserInput): Promise<string> {
  const id = await usersModels.createUser({ level, password, username, vocation });

  return encode({ id });
}

export { createUser };
