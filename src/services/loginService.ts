import usersModel from '../models/usersModel';
import token from '../utils/token';
import { Login, Response } from '../interfaces/Login';
import { NewUser } from '../interfaces/User';

const logUserIn = async (body: Login): Promise<Response> => {
  const findUser: NewUser = await usersModel.getUser(body.username);
  if (!findUser || findUser.password !== body.password) { 
    return { status: 401, message: 'Username or password invalid' };
  }
  const user = { _password: findUser.password, ...findUser };
  const userToken = token.generateToken(user);
  return { status: 200, message: userToken };
};

export default {
  logUserIn,
};
