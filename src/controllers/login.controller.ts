import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import statusCodes from '../utils/statusCodes';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const input = req.body;
      const token = await this.loginService.login(input);
      if (!token) return res.status(401).json({ message: 'Username or password invalid' });
      return res.status(statusCodes.OK).json({ token });
    } catch (e) {
      const erro = (e as Error).message;
      return res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Erro ao retornar todos os pedidos',
        erro,
      });
    }
  };
}