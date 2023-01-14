import { Request, Response } from 'express';
import createToken from '../auth/jwtFunctions';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async validateLoginUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const validateLogin = await this.loginService.getUsers(username, password);

    if (validateLogin === null || validateLogin.password !== password) {
      return res.status(201).json({ message: 'Username or password invalid' });
    }
  
    const token = createToken(username);

    return res.status(201).json({ token });
  }
}