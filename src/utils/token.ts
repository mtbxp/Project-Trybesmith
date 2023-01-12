import jwt from 'jsonwebtoken';
import { TUser } from '../types';

const SECRET = process.env.JWT_SECRET as string;
// const JWT_CONFIG = {
//   algorithm: 'HS256',
//   expiresIn: '5min',
// };

export const createToken = (user: TUser) => jwt.sign(user, SECRET, {
  algorithm: 'HS256',
  expiresIn: '5min',
});

export const vevifyToken = (token: string) => jwt.verify(token, SECRET);
