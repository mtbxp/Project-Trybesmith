import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../helpers/statusCodes';
import { authenticateSignIn } from '../auth/authenticate';

class UserController {
  user;

  constructor() {
    this.user = new UserService();
  }

  public create = async (req: Request, res: Response<{ token: string }>) => {
    const { username, vocation, level, password } = req.body;

    await this.user.create({ username, vocation, level, password });
    const token: string = authenticateSignIn(username);

    return res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;