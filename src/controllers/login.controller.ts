import { Request, Response } from 'express';
import loginService from '../services/login.service';

const userLogin = async (req: Request, res: Response) => {
  const login = req.body;
  const { statusErro, response } = await loginService.userLogin(login);

  if (statusErro) return res.status(401).json({ message: response });
  return res.status(200).json({ token: response });
};

export default {
  userLogin,
};