import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private service = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.service.createUser(user);
    res.status(201).json({ token: userCreated });
  };
}
