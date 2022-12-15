import jwt from 'jsonwebtoken';
import { InterfaceLogin, InterfaceUser } from '../interfaces';

const secret = 'suaSenhaSecreta' as string;

export const createToken = (data: InterfaceUser | InterfaceLogin) => {
  const token = jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token;
};

export const validateToken = async () => {

};