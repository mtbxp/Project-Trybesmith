import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TUser } from '../types';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export function createToken(user: TUser[]) {
  const [data] = user;
  const { id, username } = data;
  const token = jwt.sign({ id, username }, secret, jwtConfig as object);
  return token;
}

export default {
  createToken,
};