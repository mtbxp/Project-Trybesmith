import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;

    const token = await this.userService.create(newUser);

    return res.status(201).json({ token });
  };
}

export default UserController;