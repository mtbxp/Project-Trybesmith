import { Secret, sign, verify } from 'jsonwebtoken';
import { User } from '../interfaces/User';

const secretJWT = process.env.JWT_SECRET as Secret;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
} as object;

const generateToken = (user: User) => {
  const token = sign({ data: user }, secretJWT, jwtConfig);
  return token;
};

const verifyToken = (token: string) => {
  try {
    const result = verify(token, secretJWT);
    return result;
  } catch (error) {
    return { isError: true, error };
  }
};

export default {
  generateToken,
  verifyToken,
};