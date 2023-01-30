import jwt from 'jsonwebtoken';
import { User } from '../types';

const secret = process.env.JWT_SECRET as string;
const jwtConfig = { algorithm: 'HS256', expiresIn: '20min' } as object;

const createToken = async (data: User) => {
  const token = jwt.sign(data, secret, jwtConfig);
  return token;
};

export default {
  createToken,
};