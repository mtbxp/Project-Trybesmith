import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { TUser } from '../types';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig:object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export async function create(user:TUser):Promise<object> {
  const payload = await UserModel.create(user);

  const token = jwt.sign(payload, secret, jwtConfig);

  return { token };
} 

export async function getByUser(name:string):Promise<TUser> {
  const user = await UserModel.getByUser(name);
  return user;
}
