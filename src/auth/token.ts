import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = <string>process.env.JWT_SECRET;

export const createToken = <T extends object>(payload: T): string => (
  jwt.sign(payload, secret)
);

export const validateToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return { error: 'INVALID_TOKEN' };
  }
};