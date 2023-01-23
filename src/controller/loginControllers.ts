import { Request, Response } from 'express';
import loginService from '../service/loginService';

export async function makLogin(req:Request, res: Response) {
  const response = await loginService.loginServ(req.body);
  if (response.token) { return res.status(response.status).json({ token: response.token }); }
  res.status(response.status).json({ message: response.message });
}

export default {
  makLogin,
};