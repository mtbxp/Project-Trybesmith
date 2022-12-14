import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function create(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const { status, error, result } = await userService
    .create({ username, vocation, level, password });

  if (error) return res.status(status).json({ error: error.message });

  res.status(status).json({ token: result });
}

export async function oi() {
  return 'poi';
}