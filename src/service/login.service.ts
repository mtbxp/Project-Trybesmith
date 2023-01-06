import jwt from 'jsonwebtoken';
import loginModels from '../models/login.models';
import { Login } from '../types/login.types';
import { secret, config } from '../middlewares/jwtConfig';

const generateToken = (user: Login) => {
  const payload = {
    id: user.id,
    username: user.username,
  };
  const token = jwt.sign({ payload }, secret, config);
  return token;
};

const login = async (user:Login) => {
  const userLogin = await loginModels.getByUser(user.username);
  if (userLogin?.username !== user.username) {
    return { status: 401, message: 'Username or password invalid' };
  }
  if (userLogin.password !== user.password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const tkn = generateToken(user);
  return { status: 200, token: tkn };
};

export default {
  login,
};
