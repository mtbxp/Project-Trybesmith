import jwt from 'jsonwebtoken';
import Users from '../interfaces/users.interface';

require('dotenv/config');

const secret = 'secret';

const generateToken = (data: Users) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '360min' });
  return token;
};

export default {
  generateToken,
};