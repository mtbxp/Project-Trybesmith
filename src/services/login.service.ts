import * as usersModel from '../models/users.model';
import { TUsers, TPessoa } from '../interfaces/types';

export default async function loginUserService(users:TUsers): 
Promise<TPessoa[]> {
  const { username, password } = users;
  const returnUser = await usersModel.getUserByEmail(username);
  
  if (!returnUser[0] || returnUser[0].password !== password) { 
    return [];
  }

  return returnUser as TPessoa[];
}