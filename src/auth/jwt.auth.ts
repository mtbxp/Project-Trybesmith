import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { IUsers } from '../interfaces/IUsers';

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || '123456789';

const createToken = (user: IUsers): string => {
  const token = sign({ data: user }, JWT_SECRET, { expiresIn: '15m', algorithm: 'HS256' });
  return token;
};

export default createToken;