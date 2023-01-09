import { Request, Response } from 'express';
import UsersService from '../services/usersService';

export default class UsersController {
  public user = new UsersService();

  create = async (req: Request, res: Response) => {
    const user = req.body;
    
    const newUser = await this.user.create(user);
    res.status(201).json(newUser);
  };
}
