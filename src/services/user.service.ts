import jwt from 'jsonwebtoken';
import { ServiceError, TokenService, User } from '../interfaces';
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

export async function login(user: User): Promise<TokenService | ServiceError> {
  const { password, username } = user;
  const userUser = await userModel.userByname(username);
  
  if (!userUser) return { status: 401, error: { message: 'não existe' } };
  
  const { password: userPassword, id, level, vocation } = userUser;

  const newObj = { id, level, username, vocation };

  const token = jwt.sign(newObj, secret, config);

  if (userPassword === password) return { status: 401, error: { message: 'abc' } };

  return { status: 200, result: token };
}
