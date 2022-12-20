import { Request, Response } from 'express';
import generateToken from '../middlewares/generateToken';
import usersService from '../services/users.service';

export default async function insertNewUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  await usersService(username, vocation, level, password);

  const token = generateToken(req.body);

  return res.status(201).json({ token });
}
