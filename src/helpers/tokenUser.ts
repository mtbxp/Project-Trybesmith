import jwt from 'jsonwebtoken';
import { User } from '../types/types';

const secret = process.env.JWT_SECRET as string;

const createdToken = async (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token;
};

export default {
  createdToken,
};