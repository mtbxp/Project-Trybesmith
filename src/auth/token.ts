import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import { Users } from '../interfaces/users';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (user: Users) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig as object);
  return token;
};

export default createToken;