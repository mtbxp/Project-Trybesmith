import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TUser } from '../types';

dotenv.config();

const secret = process.env.JWT_SECRET;

export async function createToken(user: TUser) {
  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, secret as string, {
    expiresIn: '50min', algorithm: 'HS256' });

  return token;
}

export async function verifyToken() {
  // try {
  //   const payload = jwt.verify(token, secret);
  //   return payload;
  // } catch (error) {
  //   return undefined;
  // }
}