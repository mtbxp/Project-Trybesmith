import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { body } = req;
    
  const { status, message } = await loginService.login(body);
  if (status === 200) {
    return res.status(status).json({ token: message });
  }
  return res.status(status).json({ message });
};

export default {
  login,
};