import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '12h',
};

export default function createToken(user: string) {
  const token = jwt.sign({ user }, secret, jwtConfig as object);
  return token;
}
