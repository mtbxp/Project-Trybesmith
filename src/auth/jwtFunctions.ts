import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { UserWithoutPassword } from '../interfaces/interface';

const secret: Secret = process.env.JWT_SECRET || '';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

function createToken(user: UserWithoutPassword): string {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

function verifyToken(token: string) {
  try {
    const verified = jwt.verify(token, secret);
    return { error: null, message: verified };
  } catch (error) {
    return { error: 'error', message: 'Expired or invalid token' };
  }
}

export {
  createToken,
  verifyToken,
};