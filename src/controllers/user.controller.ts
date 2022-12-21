import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    try {
      const input = req.body;
      const token = await this.userService.createUser(input);
      req.body = token;
      return res.status(statusCodes.CREATED).json({ token });
    } catch (e) {
      const erro = (e as Error).message;
      return res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Erro ao criar usuário',
        erro,
      });
    }
  };
}