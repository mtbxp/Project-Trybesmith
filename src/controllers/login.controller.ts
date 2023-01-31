import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response):Promise<void> => {
  const { body } = req;
  const { status, message } = await loginService.login(body);
  if (status === 200) {
    res.status(status).json({ token: message });
  } else res.status(status).json({ message });
};

export default {
  login,
}; 