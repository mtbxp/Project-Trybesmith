import { sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const createToken = (value: number) => (
  sign({ data: value }, secret, { algorithm: 'HS256', expiresIn: '15min' })
);
export const getPayload = (token: string) => verify(token, secret);
