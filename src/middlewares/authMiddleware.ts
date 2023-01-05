import jwt from 'jsonwebtoken';
import ILogin from '../Interfaces/login.interface';
import IUser from '../Interfaces/user.interface';

export default function generateToken(user: IUser | ILogin): string {
  const payload = { id: user.id, username: user.username };
  const secret = 'seu segredo aqui';
  return jwt.sign(payload, secret as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
}
