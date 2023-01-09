import { Request, Response } from 'express';
import userLogin from '../services/login';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await userLogin(username, password);

  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  res.status(200).json({ token });
};

export default login;