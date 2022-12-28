import { Request, Response } from 'express';
import registerUser from '../services/user.service';

export default async function registerNewUser(req: Request, res: Response): Promise<void> {
  const newUser = req.body;
  const token = await registerUser(newUser);
  res.status(201).json(token);
}