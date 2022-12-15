import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TLogin } from '../types/index';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export function createToken(data: TLogin) {
  const payload = { id: data.id, username: data.username };
  const token = jwt.sign(payload, secret, jwtConfig as object);
  return token;
}

export default {
  createToken,
};