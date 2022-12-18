import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const JwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export default function isToken(user: string) {
  const token = Jwt.sign({ user }, secret, JwtConfig as object);
  return token;  
}
