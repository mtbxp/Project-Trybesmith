import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const token = await this.userService.createUser(req.body);
    return res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;
