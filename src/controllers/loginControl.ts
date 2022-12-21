import { Request, Response } from 'express';
import verifyLogin from '../services/loginService';

const login = async (req: Request, res: Response) => {
  const loginDate = req.body;
  const result = await verifyLogin(loginDate);
  res.status(result.status).json(result.date);
};

export default login;