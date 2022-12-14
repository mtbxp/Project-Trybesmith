import { Request, Response } from 'express';
import loginService from '../services/loginService';

const logUserIn = async (req: Request, res: Response):Promise<void> => {
  const { body } = req;
  const { status, message } = await loginService.logUserIn(body);
  if (status === 200) {
    res.status(status).json({ token: message });
  } else res.status(status).json({ message });
};

export default {
  logUserIn,
}; 