import { sign } from 'jsonwebtoken';
import { Users } from '../types/User';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '3h',
};

const secret = process.env.JWT_SECRET as string;

const newToken = (user: Users) => sign({ data: user }, secret, jwtConfig as object);

export default newToken;