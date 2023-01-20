import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default function createToken<T>(data: T): string {
  const token = jwt.sign({ data }, secret, jwtConfig as object);
  return token;
}