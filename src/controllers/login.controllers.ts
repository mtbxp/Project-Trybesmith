import { Request, Response } from 'express';
import loginService from '../services/login.services';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await loginService(username, password);

  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  res.status(200).json({ token });
};

export default login;