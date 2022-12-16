import { Request, Response } from 'express';
import UserService from '../service/user.service';
import { User } from '../types/User';
import JWT from '../auth/jwt';

export default class UserController {
  public service: UserService;

  public token: JWT;

  constructor() {
    this.service = new UserService();
    this.token = new JWT();
  }

  public async registerUser(req: Request, res: Response) {
    const user: User = req.body;
    await this.service.registerUser(user);
    const userToken = this.token.generateToken(user);

    return res.status(201).json({ token: userToken });
  }
}