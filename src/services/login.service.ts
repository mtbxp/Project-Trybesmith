import usersModel from '../models/users.model';
import token from '../helpers/token';
import { Login, MessageError, UserWithPassword } from '../types/types';

const login = async (loginBody: Login): Promise<MessageError> => {
  const userCreated: UserWithPassword = await usersModel.getByUsername(loginBody.username);
  if (!userCreated || userCreated.password !== loginBody.password) { 
    return { type: 401, message: 'Username or password invalid' };
  }
  const { id, username, vocation, level } = userCreated;
  const userToToken = { id, username, vocation, level };
  const tokenCreated = token.createToken(userToToken);
  return { type: 200, message: tokenCreated };
};

export default {
  login,
};