import * as loginModel from '../models/login.model';
import { Login } from '../types';

const loginValidation = async (login: Login) => {
  const hasLogin = await loginModel.loginValidation(login);
  if (!hasLogin) return { error: 401, message: 'Username or password invalid', data: null };
  return { data: hasLogin, error: null, message: null };
};

const listAllProducts = async () => {};

export {
  loginValidation,
  listAllProducts,
};