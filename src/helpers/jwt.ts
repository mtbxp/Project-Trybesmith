import jwt from 'jsonwebtoken';
import { User } from './types';

const SECRET = process.env.JWT_SECRET || 'secretJWT';

export default function jwtToken(user: User) {
  const payload = { id: user.id, vocation: user.vocation, level: user.level };
  const token = jwt.sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '35d',
  });

  return token;
}
