import { Request, Response } from 'express';
import ILogin from '../Interfaces/login.interface';
import * as loginService from '../services/loginService';

export default async function login(req: Request, res: Response) {
  const { username, password } = req.body as ILogin;
  const payload: ILogin = { username, password };
  const sucessfulLogin = await loginService.default(payload);
  if (sucessfulLogin) {
    res.status(200).json({ token: sucessfulLogin });
  } else {
    res.status(401).json({ message: 'Username or password invalid' });
  }
}