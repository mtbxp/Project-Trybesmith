import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/users.service';
import token from '../auth/generateToken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.create(user);
    const userToken = token.generateToken(user);
    res.status(statusCodes.CREATED).json({ token: userToken });
  };
}

export default UserController;