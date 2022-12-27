import jwt from 'jsonwebtoken';
import { User } from '../interfaces/User.interface';

const secret = process.env.JWT_SECRET || 'suasenhaaqui';

const createToken = (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '30min' });
  return token;
};

export default {
  createToken,
};
