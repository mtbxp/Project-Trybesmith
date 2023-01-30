import jwt from 'jsonwebtoken';
import { TUsers } from '../types';

const secret = process.env.JWT_SECRET || 'segredo';

const createToken = (userWithoutPassword: TUsers) => {
  const payload = { id: userWithoutPassword.id, username: userWithoutPassword.username };
  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
};

const verifyToken = (authorization: string) => {
  const payload = jwt.verify(authorization, secret);
  return payload;
};

export default {
  createToken,
  verifyToken,
};
