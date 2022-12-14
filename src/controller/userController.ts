import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  public userService = new UserService();

  create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.userService.create(user);
    res.status(201).json(token);
  };

  login = async (req: Request, res: Response) => {
    const { status, token, error } = await this.userService.login(req.body);

    if (error) return res.status(status).json(error);

    res.status(status).json({ token });
  };
}