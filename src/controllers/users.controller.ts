import { Request, Response } from 'express';
import usersService from '../services/users.service';
import generateToken from '../utils/generateToken';

export default async function insertNewUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  await usersService(username, vocation, level, password);

  const token = generateToken(req.body);

  return res.status(201).json({ token });
}
