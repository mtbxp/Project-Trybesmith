import jwt from 'jsonwebtoken';
import * as userModel from '../models/userModel';
import { UserDetail, UserLogin } from '../interfaces';
import { secret, config } from '../middlewares/jwtConfig';

export async function create(user: UserDetail) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}

export async function login(user: UserLogin) {
  const payload = await userModel.getByUsername(user.username);

  if (payload === null || payload.password !== user.password) {
    return { status: 401, error: { message: 'Username or password invalid' } };
  }
  
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 200, data };
}