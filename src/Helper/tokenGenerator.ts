import Jwt from 'jsonwebtoken';
import User from '../interfaces/userInterface';

const SECRET = process.env.JWT_SECRET;
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (user: User): object => {
  const token = Jwt.sign(user, SECRET as string, JWT_CONFIG as object);
  
  return { token };
};

export default createToken;
