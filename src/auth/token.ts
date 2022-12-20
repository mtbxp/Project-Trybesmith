import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types/index';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

const JwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export default function isToken(data: User): string {
  const token = Jwt.sign(data, secret, JwtConfig as object);
  return token;  
}
