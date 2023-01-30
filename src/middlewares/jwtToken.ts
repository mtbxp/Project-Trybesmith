import jwt from 'jsonwebtoken';
import { User } from '../types';

const secret = process.env.JWT_SECRET as string;
const jwtConfig = { algorithm: 'HS256', expiresIn: '20min' } as object;

const createToken = async ({ id, username }: User) => {
  const payload = { id, username };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export default {
  createToken,
};