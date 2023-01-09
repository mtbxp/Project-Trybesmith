import { Request, Response } from 'express';
import * as serviceUser from '../services/user.service';

export async function addNewUser(req: Request, res: Response) {
  const newUser = req.body;
  const { message } = await serviceUser.addNewUser(newUser);
  return res.status(201).json({ token: message });
}

export async function userLogin(req: Request, res: Response) {
  const login = req.body;
  const { status, message } = await serviceUser.userLogin(login);
  if (status) return res.status(401).json({ message });
  return res.status(200).json({ token: message });
}