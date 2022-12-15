import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TUser } from '../types';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secretJWT';
const createToken = (user:TUser) => {
  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, secret, {
    expiresIn: '5min',
    algorithm: 'HS256',
  });
  return token;
};

export default {
  createToken,
};