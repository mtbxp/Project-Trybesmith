import { TUser } from '../types';
import { createToken } from '../auth/createToken';
import * as usersModel from '../models/usersModel';

export async function insertUserS(user: TUser): Promise<string> {
  const { username } = user;

  const result = await usersModel.searchUser(username);

  await usersModel.insert(user);

  const token = createToken(result);
  
  return token;
}

export default insertUserS;