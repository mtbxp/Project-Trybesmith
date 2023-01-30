import { Request, Response } from 'express';
import loginService from '../services/loginService';

const userLogin = async (req: Request, res: Response) => {
  const login = req.body;
  const response = await loginService.userLogin(login);
  if (response.type !== 200) {
    res.status(response.type).json({ message: response.message });
  } else {
    res.status(200).json({ token: response.message });
  }
};

export default {
  userLogin,
};