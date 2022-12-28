import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'prettylittlepasswords';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const generateToken = (userData: User) => {
  const token = jwt.sign({ data: userData }, secret, jwtConfig as object);
  return token;
};

export default {
  generateToken,
};
