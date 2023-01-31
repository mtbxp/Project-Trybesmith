import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../types/User';

dotenv.config();

interface UserPayload extends jwt.JwtPayload {
  data: User;
}

const SECRET = process.env.JWT_SECRET || 'descubra';

const generateToken = (data: User) => {
  // const payload = data;
  
  const token = jwt.sign({ data }, SECRET, { algorithm: 'HS256', expiresIn: '1d' });

  return token;
};

const verifyToken = (token: string) => {
  try {
    const data = jwt.verify(token, SECRET) as UserPayload;
    return data;
  } catch (e) {
    return false;
  }
};

export { generateToken, verifyToken };