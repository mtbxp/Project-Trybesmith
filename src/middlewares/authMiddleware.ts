import jwt from 'jsonwebtoken';
import IUser from '../Interfaces/user.interface';

export default function generateToken(user: IUser): string {
  const payload = { id: user.id, user: user.username };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
}
