import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = 'secret';

const generateToken = (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '360min' });
  return token;
};

export default {
  generateToken,
};