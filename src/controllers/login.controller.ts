import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async checkUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const { status, error, message } = await this.loginService.checkUser({ username, password });
    if (error) return res.status(status).json({ message });
    return res.status(status).json({ token: message });
  }
}