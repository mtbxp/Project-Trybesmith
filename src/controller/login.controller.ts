import { Request, Response } from 'express';

import LoginService from '../services/login.service';

export default class LoginController {
  private service;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body as { username: string; password: string };
    
    const { type, message } = await this.service.login(username, password);

    if (type !== 200) return res.status(type).json({ message });

    return res.status(type).json({ token: message });
  };
}
