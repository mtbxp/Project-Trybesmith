import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function createUser(req: Request, res: Response) {
  const newUser = req.body;
  const { message } = await userService.createUser(newUser);
  return res.status(201).json({ token: message });
}

export async function login(req: Request, res: Response) {
  const loginInfo = req.body;
  const { status, message } = await userService.login(loginInfo);
  if (status) return res.status(401).json({ message });
  return res.status(200).json({ token: message });
}