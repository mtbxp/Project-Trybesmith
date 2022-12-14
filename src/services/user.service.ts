import jwt from 'jsonwebtoken';
import { User } from '../interfaces';
import * as userModel from '../models/user.model';
import { config, secret } from '../middlewares/jwtConfig';

export async function create(user: User) {
  const result = await userModel.userByname(user.username);
  
  if (result) return { status: 400, error: { message: 'usuario ja existente' } };
  
  const { id, level, username, vocation } = await userModel.create(user);
  const newObj = { id, level, username, vocation };
  const token = jwt.sign(newObj, secret, config);

  return { status: 201, result: token };
}

export function oi() {
  return 'oi';
}