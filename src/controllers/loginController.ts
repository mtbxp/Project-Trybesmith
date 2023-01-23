import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import statusCodes from '../utils/statusCodes';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const { body: { username, password } } = req;

    const token = await this.loginService.login(username, password);
  
    if (!token) {
      return res.status(statusCodes.UNAUTHORIZED).json({
        message: 'Username or password invalid',
      });
    }

    return res.status(statusCodes.OK).json({ token });
  };
}
