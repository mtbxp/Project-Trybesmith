import { Request, Response } from 'express';
import userService from '../services/users.service';

export default async function insertUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const result = await userService(
    username,
    vocation,
    level,
    password,
  );
  return res.status(201).json(result);
}
