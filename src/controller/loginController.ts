import { Request, Response } from 'express';
import loginService from '../services/loginServices';

const loginController = async (req: Request, res: Response) => {
  const loginData = req.body;
  const token = await loginService.loginService(loginData);

  if (typeof token === 'object') return res.status(401).send(token);

  return res.status(200).send({ token });
};

export default { loginController };