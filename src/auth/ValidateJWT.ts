import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export = async (data: object) => {
  const token = sign(data, secret, {
    algorithm: 'HS256',
    expiresIn: '1h' });
  return token;
};