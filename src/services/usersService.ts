import { TUser } from '../types';
import { createToken } from '../auth/JSONwebToken';
import * as usersModel from '../models/usersModel';

export async function insert(user: TUser): Promise<string> {
  const { username } = user;
  const id = await usersModel.insert(user);
  const token = createToken({ id, username });
  return token;
}

export default insert;