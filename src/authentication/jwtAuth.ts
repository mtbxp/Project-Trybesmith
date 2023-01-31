import { sign } from 'jsonwebtoken';
import { Users } from '../types/User';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '3h',
};

const secret = process.env.JWT_SECRET as string || 'secret';

const newToken = (user: Users): string => {
  const result = sign(user, secret, jwtConfig as object);
  return result;
};

export default newToken;