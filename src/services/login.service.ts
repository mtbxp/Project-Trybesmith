import usersModel from '../models/user.model';
import token from '../helpers/token';
import { Login, Response } from '../interfaces/login';
import { Found } from '../interfaces/user';

const login = async (body: Login): Promise<Response> => {
  const found: Found = await usersModel.getUser(body.username);
  if (!found || found.password !== body.password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const { password, ...userWithoutPassword } = found;
  const userToken = token.generateToken(userWithoutPassword);
  return { status: 200, message: userToken };
};

export default {
  login,
};