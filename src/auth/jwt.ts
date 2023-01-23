import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../types/User';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'descubra';

const generateToken = (data: User) => {
  const payload = data;
  
  const token = jwt.sign(payload, SECRET, { algorithm: 'HS256', expiresIn: '1d' });

  return token;
};

export default generateToken;