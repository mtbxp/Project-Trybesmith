import jwt from 'jsonwebtoken';
import { TPayload } from '../types';

const SECRET = process.env.JWT_SECRET as string;
// const JWT_CONFIG = {
//   algorithm: 'HS256',
//   expiresIn: '5min',
// };

export const createToken = (user: TPayload) => jwt.sign(user, SECRET, {
  algorithm: 'HS256',
  expiresIn: '5min',
});

export const vevifyToken = (token: string) => jwt.verify(token, SECRET);
