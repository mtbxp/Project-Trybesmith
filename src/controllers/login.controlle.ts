import { Request, Response } from 'express';
import loginService from '../service/login.service';

const login = async (req: Request, res: Response) => {
  const { body } = req;
  const result = await loginService.login(body);
  if (result.status === 401) return res.status(401).json(result.message);
  res.status(200).json({ token: result.token });
};

export default {
  login,
};
