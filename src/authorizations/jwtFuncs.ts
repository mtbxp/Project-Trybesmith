import * as jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/Users';

const JWT_SECRET = process.env.JWT_SECRET as string;

function createToken(userData: IUsers): string {
  const token = jwt.sign({ ...userData }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60min',
  });

  return token;
}

export default { createToken };
