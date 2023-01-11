import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export = (data: User) => {
  const token = sign(data, secret, {
    algorithm: 'HS256',
    expiresIn: '1h' });
  return token;
};