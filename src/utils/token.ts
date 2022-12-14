import jwt from 'jsonwebtoken';
import { User } from '../interfaces/User';

const secret = 'xablau';

const generateToken = async (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token;
};

export default {
  generateToken,
};