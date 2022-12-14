import jwt from 'jsonwebtoken';
import { TokenService, User } from '../interfaces';
import * as userModel from '../models/user.model';
import { config, secret } from '../middlewares/jwtConfig';

export async function create(user: User): Promise<TokenService> {
  const { id, level, username, vocation } = await userModel.create(user);

  const newObj = { id, level, username, vocation };

  const token = jwt.sign(newObj, secret, config);

  return { status: 201, result: token };
}

export function oi() {
  return 'oi';
}