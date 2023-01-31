import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user';

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '360min' });
  return token;
};

export default {
  generateToken,
};