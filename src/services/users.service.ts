import * as usersModel from '../models/users.model';
import { encode } from '../libs/token';
import { Credentials, UserInput } from '../types';

async function createUser({ level, password, username, vocation }: UserInput): Promise<string> {
  const id = await usersModel.createUser({ level, password, username, vocation });

  return encode({ id });
}

async function login({ username, password }: Credentials): Promise<string> {
  const user = await usersModel.getUserByUsername(username);

  if (!user || user.password !== password) {
    throw new Error('Username or password invalid');
  }

  return encode({ id: user.id });
}

export { createUser, login };
