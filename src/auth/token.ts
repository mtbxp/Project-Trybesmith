import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'seusegredotoken';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const createToken = (userToken: User) => {
  const token = jwt.sign({ data: userToken }, secret, jwtConfig as object);
  return token;
};

export const verifyToken = (token: string) => {
  const result = jwt.verify(token, secret);
  return result;
};
