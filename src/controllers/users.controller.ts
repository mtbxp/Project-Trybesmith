import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  constructor(private productService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreate = await this.productService.create(user);
    res.status(201).json({ token: userCreate });
  };
}