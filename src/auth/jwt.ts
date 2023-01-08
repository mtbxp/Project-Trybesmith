import jwt, { Secret } from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import User from '../types/User';

dotenv.config();

const secret: Secret = process.env.JWT_SECRET as string;

const generateToken = (data: User) => {
  const payload = { id: data.id, username: data.username };

  const token = jwt.sign(
    payload, 
    secret,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return token;
};

export default {
  generateToken,
};