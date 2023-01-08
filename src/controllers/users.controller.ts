import { Request, Response } from 'express';
import defineToken from '../auth/token';
import IUser from '../interfaces/user.interface';
import UsersService from '../services/users.service';
import statusCode from '../utils/statusCode';

export default class UsersController {
  public usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public create = async (req: Request, res: Response) => {
    const { username, vocation, level, password } = req.body;
    const { message } = await this.usersService.create({ username, vocation, level, password });
    const { id } = message as IUser;

    return res.status(statusCode.CREATED).json({ token: defineToken(id as number) });
  };
}