import jwt from 'jsonwebtoken';
import HttpError from '../http/http.exception';

const secret = <string>process.env.JWT_SECRET || 'xulapa';

export const createToken = <T extends object>(payload: T): string => (
  jwt.sign(payload, secret)
);
export const validateToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new HttpError(401, 'Invalid token');
  }
};