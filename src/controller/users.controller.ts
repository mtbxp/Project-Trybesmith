import { Request, Response } from 'express';
import UserService from '../services/users.service';
import JWT from '../utils/JWT';

export default class UserController {
  private service;

  constructor() {
    this.service = new UserService();
  }

  public insert = async (req: Request, res: Response): Promise<Response> => {
    const { type, message } = await this.service.insert(req.body);
    const auth = new JWT();
    const token = auth.generateToken(message);

    return res.status(type).json({ token });
  };
}