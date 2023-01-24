import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TokenResult } from '../utils/interfaces/tokenResultInterface';

dotenv.config();

const secret = process.env.JWT_SECRET as string || 'secrethere';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export function createToken<T>(data: T): string {
  const token = jwt.sign({ data }, secret, jwtConfig as object);
  return token;
}

export function verifyToken(token: string): object {
  const result: TokenResult = { error: null, data: null };

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      result.error = err;
    } else {
      result.data = data;
    }
  });

  return result as TokenResult;
}
