import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ICreatedUser } from '../types/types';

dotenv.config();

export const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET as string;

export function tokenUser(data: ICreatedUser) {
  const token = jwt.sign({ data }, secret, config as object);
  return token;
}