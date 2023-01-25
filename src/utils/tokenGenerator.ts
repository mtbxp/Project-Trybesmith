import jwt from 'jsonwebtoken';
import { TUser } from '../types';

const secret = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: object = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const tokenGenerator = (user: TUser) => {
  const token = jwt.sign(user, secret, JWT_CONFIG);
  return token;
};

export default tokenGenerator;