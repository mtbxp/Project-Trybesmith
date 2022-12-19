import { Request, Response } from 'express';
import loginService from '../services/login.services';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await loginService(username, password);

  res.status(200).json({ token });
};

export default login;