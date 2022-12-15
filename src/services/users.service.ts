import model from '../models/users.model';
import { TUsers } from '../types';

async function createUserService(
  username: string, 
  vocation: string,
  level: number, 
  password: string,
): Promise<TUsers> {
  const user = await model.createUser(username, vocation, level, password);

  return user;
}

export default {
  createUserService,
};