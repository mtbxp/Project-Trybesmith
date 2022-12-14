import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { CreatedUser } from '../types/types';

dotenv.config();

export const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET as string;

export function generateToken(info: CreatedUser) {
  const token = jwt.sign({ info }, secret, config as object);
  return token;
}