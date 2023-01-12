import { Request, Response } from 'express';
import ValidateJWT from '../auth/ValidateJWT';
import service from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await service.getUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const token = ValidateJWT({ username, password });
  res.status(200).json({ token });
};

export default {
  login,
}; 