import { sign, SignOptions } from 'jsonwebtoken';
import { TPeople } from '../types/index';

const secret = process.env.JWT_SECRET || 'secret';
const jwtConfig: SignOptions = {
  expiresIn: '15d',
  algorithm: 'HS256',
};
export default function createTokenAuth(user: TPeople) {
  const tokenCreated = sign(user, secret, jwtConfig);
  return tokenCreated;
}