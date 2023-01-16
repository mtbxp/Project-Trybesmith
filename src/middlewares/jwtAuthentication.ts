import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TRegister } from '../types';

dotenv.config();

const SECRET = <string>process.env.JWT_SECRET;

const createToken = (user: TRegister) => (
  jwt.sign({ data: user }, SECRET, {
    algorithm: 'HS256', expiresIn: '1d',
  })
);

export default createToken;
