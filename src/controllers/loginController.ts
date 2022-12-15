import { Request, Response } from 'express';
import { TLogin } from '../types';

import * as loginService from '../services/loginService';

export async function login(req: Request, res: Response) {
  const user = req.body as TLogin;
  const { status, message, token } = await loginService.login(user);

  if (message) return res.status(status).json({ message });

  return res.status(status).json({ token });
}

export default login;