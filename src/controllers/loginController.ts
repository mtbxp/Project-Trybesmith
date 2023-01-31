import { Request, Response } from 'express';
import loginService from '../services/loginService';

const validateLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const logged = await loginService.searchLogin({ username, password });
  res.status(200).json({ token: logged });
};

export default {
  validateLogin,
};