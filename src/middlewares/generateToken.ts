import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TUser } from '../types/users.type';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export default function generateToken(username: TUser) {
  const token = jwt
    .sign({ username }, secret, { algorithm: 'HS256', expiresIn: '1d' });

  return token;
}