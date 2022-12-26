import jwt from 'jsonwebtoken';
import { TLogin } from '../types';

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (user:TLogin) => {
  const { id, username } = user;
  const token = jwt.sign({ id, username }, secret, jwtConfig as object);

  return token;
};

export default createToken;