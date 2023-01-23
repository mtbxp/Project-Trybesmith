import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

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

export function verifyToken(authorization: string): object {
  const payload = jwt.verify(authorization, secret);
  return payload as object;
}
