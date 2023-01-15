import jwt from 'jsonwebtoken';
import { TUserIdName } from '../models/allInterfaces/interfaceUser';

const secret = process.env.JWT_SECRET as string;

const createToken = (userData: TUserIdName): string => {
  const token = jwt.sign({ ...userData }, secret, { algorithm: 'HS256', expiresIn: '5d' });
  return token;
};

export default { createToken };