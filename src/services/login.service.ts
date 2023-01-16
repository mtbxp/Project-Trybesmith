import jwt from '../auth/jwt';
import { Login } from '../interfaces/User';

import usersModel from '../models/users.model';

const userLogin = async (login: Login) => {
  const result = await usersModel.getUser(login); 
  if (!result) return { statusErro: 'LOGIN_FAILED', response: 'Username or password invalid' };
  
  const payload = { id: result.id, ...login };
  const token = jwt.generateToken(payload);
  return { statusErro: null, response: token };
};

export default {
  userLogin,
};