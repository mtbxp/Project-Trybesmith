import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NewUser } from '../utils/interfaces/userInterface';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default function createToken(user: NewUser) {
  const token = jwt.sign({ user }, secret, jwtConfig as object);
  return token;
}