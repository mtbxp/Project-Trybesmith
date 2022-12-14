import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const loginData = req.body;
  const token = await loginService.login(loginData);

  if (typeof token === 'object') return res.status(401).send(token);

  return res.status(200).send({ token });
};

export default { login };