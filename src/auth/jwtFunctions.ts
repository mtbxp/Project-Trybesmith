import jwt from 'jsonwebtoken';
import { TUser } from '../interfaces';

const secret: string = process.env.JWT_SECRET || 'suaSenha';

const createToken = (user: TUser): string => {
  const token = jwt.sign({ data: user }, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
};

export default createToken;