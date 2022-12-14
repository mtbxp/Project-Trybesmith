import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function create(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const status = await userService
    .create({ username, vocation, level, password });

  res.status(status.status).json(status.status);
}

export async function oi() {
  return 'poi';
}