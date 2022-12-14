import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';
import UserService from '../services/userService';
import { UserCredentials } from '../interfaces/userInterface';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const { token } = await this.userService.create(user);
    res.status(statusCodes.CREATED).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const userCredentials = req.body as UserCredentials;
    const { status, error, token } = await this.userService.login(userCredentials);

    return error
      ? res.status(status).json({ message: error })
      : res.status(status).json({ token });
  };
}

export default UsersController;