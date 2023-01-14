import jwt from 'jsonwebtoken';
import { UserCredential } from '../interfaces';
import { secret, config } from '../middlewares/jwtConfig';
import * as userModel from '../models/userModel';

export async function createUser(user: UserCredential) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}

export async function login(user: UserCredential) {
  const payload = await userModel.getUsername(user.username);
  if (payload === null || payload.password !== user.password) {
    return { status: 401, error: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 200, data };
}
