import { Request, Response } from 'express';
import UserService from '../service/user.service';
import statusCodes from '../utils/statusCode';

class UserController {
  constructor(private userService = new UserService()) {}

  create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.userService.create(user);

    res.status(statusCodes.CREATED).json({ token });
  };
}

export default new UserController();