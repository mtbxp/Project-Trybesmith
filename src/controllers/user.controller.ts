import { Request, Response } from 'express';
import UserService from '../services/user.service';

const HTTP_STATUS_CREATED = 201;

export default class UserController {
  public user = new UserService();

  create = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.user.create(user);
    res.status(HTTP_STATUS_CREATED).json(newUser);
  };
}
