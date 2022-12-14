import { Request, Response } from 'express';
import loginService from '../services/loginService';
import { TLogin } from '../types/types';

const createUserController = async (req: Request, res: Response) => {
  const login = req.body as TLogin;
  const { status, data, message } = await loginService.insertLoginService(login);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(data);
};

export default {
  createUserController,
};