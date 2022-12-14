import { Request, Response } from 'express';
import UserService from '../services/users.service';
import statusCodes from '../../statusCodes';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const create = await this.userService.createNewUser(user);
    if (!create) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: 'Bad Request' });
    }

    return res.status(statusCodes.CREATED).json({ token: create });
  };
}