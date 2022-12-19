import { Secret, sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../types/User';

dotenv.config();

const secret: Secret = process.env.JWT_SECRET || 'meuSegregoEhUmaPorcaria';

export const createToken = (data: User) => {
  const payload = data;

  const token = sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });

  return token;
};

export const verifyToken = (authorization: string) => {
  try {
    const payload = verify(authorization, secret);
    return payload;
  } catch (err) {
    console.log(err);
    return { isError: true, err };
  }
};
