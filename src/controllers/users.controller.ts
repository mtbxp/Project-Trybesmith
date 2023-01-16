import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.usersService.create(user);

    res.status(statusCodes.CREATED).json({ token: 'autorizado' });
  };
}
