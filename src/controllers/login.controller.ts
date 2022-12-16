import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import loginUserService from '../services/login.service';

const secret = process.env.JWT_SECRET || 'secretToken';

export default async function loginUser(req: Request, res: Response) {
  const { body } = req;
  const returnUser = await loginUserService(body);

  if (!returnUser[0]) return res.status(401).json({ message: 'Username or password invalid' });
  const { id, username } = returnUser[0];
  const token = jwt
    .sign({ data: { username, id } }, secret, { expiresIn: '1d', algorithm: 'HS256' });

  return res.status(200).json({ token });
}
