import { Request, Response } from 'express';
import UserServices from '../services/user.service';

class UserController {
  public service;

  constructor() {
    this.service = new UserServices();
  }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const tokenUser = await this.service.userCreate(user);
    res.status(201).json({ token: tokenUser });
  };
}

export default UserController;