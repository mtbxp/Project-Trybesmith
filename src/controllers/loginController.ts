/* import { Request, Response } from 'express';
import loginService from '../services/loginService';

const statusOk = 200;

export default async function login(req: Request, res: Response): Promise<void> {
  const login = req.body;
  const result = await loginService.login(login);

  if (result.type !== statusOk) {
    return res.status(result.type).json({ message: result.message });
  } 
  return res.status(200).json({ token: result.message });
} */