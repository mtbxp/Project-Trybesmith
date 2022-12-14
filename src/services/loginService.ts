import usersModel from '../models/usersModel';
import token from '../utils/token';
import { Login, Response } from '../interfaces/Login';
import { FoundUser } from '../interfaces/User';

const logUserIn = async (body: Login): Promise<Response> => {
  const userFound: FoundUser = await usersModel.getUser(body.username);
  if (!userFound || userFound.password !== body.password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const { password, ...userWithoutPassword } = userFound;
  const userToken = token.generateToken(userWithoutPassword);
  return { status: 200, message: userToken };
};

export default {
  logUserIn,
};
