import jwt from 'jsonwebtoken';
import { TUser } from '../types';

const secret = process.env.JWT_SECRET || 'xomps' as string;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
} as object;

const generateToken = (data: TUser) => {
  const payload = { id: data.id, username: data.username };
  const tkn = jwt.sign({ payload }, secret, jwtConfig);
  return tkn;
};

// const verifyToken = (authorization) => {
//   try {
//     const payload = jwt.verify(authorization, secret);
//     return payload;
//   } catch (error) {
//     return { isError: true, error };
//   }
// };

export default {
  generateToken,
  // verifyToken,
};