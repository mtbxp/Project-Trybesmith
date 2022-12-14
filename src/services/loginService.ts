import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import loginModel from '../models/loginModel';
import { TLogin } from '../types/types';

const insertLoginService = async (login: TLogin) => {
  const payload = await loginModel.insertLoginModel(login);

  console.log(payload);

  if (!payload) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 200, data };
};

export default {
  insertLoginService,
};