import { Request, Response } from 'express';
import User from '../interfaces/user.interface';
import UserService from '../services/user.service';
import Jwt from '../auth/jwtConfig';

export default class UserController {
  public service:UserService;

  constructor() {
    this.service = new UserService();
  }

  public async createUser(req:Request, res:Response) {
    const user:User = req.body;
    const payload = await this.service.createUser(user);

    const { id, username } = payload;
    
    const jwt = new Jwt({ id, username });

    const token = jwt.createToken();

    return res.status(201).json({ token });
  }
}