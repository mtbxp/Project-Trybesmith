import { Request, Response } from 'express';
import { registerUser, logUser } from '../services/user.service';

export async function registerNewUser(req: Request, res: Response): Promise<void> {
  const newUser = req.body;
  const { status, data } = await registerUser(newUser);
  res.status(status).json(data);
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  const user = req.body;
  const { status, data } = await logUser(user); 
  res.status(status).json(data);
}