import { Secret, sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../types/User';

dotenv.config();

const secret: Secret = process.env.JWT_SECRET as Secret;

export const createToken = (payload: User) => {
  const token = sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = verify(token, secret);
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};
