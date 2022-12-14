import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UserController {
  public service;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const tokenCreated = await this.service.createUser(user);
    res.status(201).json({ token: tokenCreated });
  };
}

export default UserController;