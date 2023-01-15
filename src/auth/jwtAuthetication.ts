import jwt from 'jsonwebtoken';
import { TUserWithoutPassword } from '../models/interfaceUser';

const secret = process.env.JWT_SECRET as string;

const createToken = (userData: TUserWithoutPassword): string => {
  const token = jwt.sign(userData, secret, { algorithm: 'HS256', expiresIn: '5d' });
  return token;
};

export default { createToken };