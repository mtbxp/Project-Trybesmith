import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces/token.interface';

export const secret = 'secret';

export const config: object = {
  expiresIn: '8d',
  algorithm: 'HS256',
};

export const decoded = (authorization: string) => {
  const payload = jwt.verify(authorization, secret);
  return payload as Payload;
};