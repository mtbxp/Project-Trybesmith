import { Request, Response } from 'express';
import UserService from '../services/userService';
import statusCodes from '../utils/statusCodes';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.create(user);

    return res.status(statusCodes.CREATED).json({ token });
  };
}
