import { Request, Response } from 'express';
import { HttpError } from '../interfaces';
import LoginService from '../services/loginService';
import statusCodes from '../statusCodes';

const loginService = new LoginService();

export default class LoginController {
  login = async (req: Request, res: Response) => {
    const loginBody = req.body;

    try {
      const { status, data } = await loginService.login(loginBody);

      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;

      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };
}