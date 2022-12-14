import jwt from 'jsonwebtoken';
import { InterfaceUser } from '../interfaces';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta' as string;

export const createToken = (data: InterfaceUser) => {
  const token = jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token;
};

export const validateToken = async () => {

};