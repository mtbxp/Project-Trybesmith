import { Request, Response } from 'express';
import statusCodes from '../statusCode';
import UserService from '../services/user.service';
import token from '../auth/token';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    const userToken = token.generateToken(userCreated);
    res.status(statusCodes.CREATED).json({ token: userToken });
  };
}

export default UserController;