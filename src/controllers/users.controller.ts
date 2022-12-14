import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(statusCodes.OK).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.create(user);
    res.status(statusCodes.CREATED).json({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
      + 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.'
      + 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    });
  };
}

export default UsersController;