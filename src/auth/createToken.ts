import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const config: JWT.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15d',
};

const createToken = (payload: string | object): string => {
  const newToken = JWT.sign(payload, secret, config);
  return newToken;
};

export default createToken;