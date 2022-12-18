import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import { Iuser } from '../types';

dotenv.config();
const jwtConfig:object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

export const generateToken = async (info:object) => {
  const token = jwt.sign({ data: info }, secret, jwtConfig);
  return token;
};

export const verifyToken = async (token:string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded as { data:Iuser };
  } catch (e) {
    throw new Error('Expired or invalid token');
  }
};