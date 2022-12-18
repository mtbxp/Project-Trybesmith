import { Request, Response } from 'express';
import isToken from '../auth/token';
import * as userService from '../services/userService';

export default async function insertUser(req: Request, res: Response) {
  const users = req.body;
  await userService.insertUser(users);

  const token = isToken(users);

  return res.status(201).json({ token });
}
