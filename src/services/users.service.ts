import usersModel from '../models/users.model';
import token from '../helpers/token';
import { User, UserWithPassword } from '../types/types';

const create = async (user: UserWithPassword): Promise<string> => {
  const userCreated: User = await usersModel.create(user);
  const tokenCreated = token.createToken(userCreated);
  return tokenCreated;
};  

export default {
  create,
};