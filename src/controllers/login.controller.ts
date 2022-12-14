import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response):Promise<void> => {
  const loginBody = req.body;
  const response = await loginService.login(loginBody);
  if (response.type !== 200) {
    res.status(response.type).json({ message: response.message });
  } else {
    res.status(200).json({ token: response.message });
  }
};

export default {
  login,
};