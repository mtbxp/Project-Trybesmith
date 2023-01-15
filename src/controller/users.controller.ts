import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  private service;

  constructor() {
    this.service = new UserService();
  }

  public insert = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.insert(req.body);

    return res.status(type).json({ token: message });
  };
}