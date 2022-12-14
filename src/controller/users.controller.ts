import { Request, Response } from 'express';
import UserService from '../service/users.service';

class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public addUsers = async (req: Request, res: Response) => {
    const users = req.body;
    const token = await this.service.addUsers(users);
    res.status(201).json({ token });
  };
}

export default UserController;