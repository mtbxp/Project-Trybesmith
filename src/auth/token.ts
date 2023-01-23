import jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const configuration: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '20d',
};

export default function createToken(payload: string | object): string {
  const token = jwt.sign(payload, secret, configuration);
  return token;
}
