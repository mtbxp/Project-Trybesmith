import { Request, Response } from 'express';
import isToken from '../auth/token';
import * as userService from '../services/userService';

export async function getAll(_req: Request, res: Response) {
  const users = await userService.getAll();
  res.status(200).json(users);
}

export async function insertUser(req: Request, res: Response) {
  const users = req.body;
  await userService.insertUser(users);

  const token = isToken(users);

  return res.status(201).json({ token });
}
