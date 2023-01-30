import { Request, Response } from 'express';
import loginCheck from '../services/login.service';

const LoginController = async (request: Request, response: Response) => {
  const dataLogin = request.body;
  const result = await loginCheck(dataLogin);
  response.status(result.status).json(result.date);
};

export default LoginController;