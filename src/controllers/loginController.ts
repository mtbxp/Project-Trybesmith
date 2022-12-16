import { Request, Response } from 'express';
import { TLogin } from '../types';
import * as logonService from '../services/loginService';

export async function login(req: Request, res: Response) {
  const user = req.body as TLogin;
  const { status, message } = await logonService.login(user);
  if (status === 400 || status === 401) return res.status(status).json({ message });

  return res.status(status).json({ token: message });
}

export default login;