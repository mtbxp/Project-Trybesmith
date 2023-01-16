import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private service: UserService) {
    this.service = service;
    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const token = await this.service.create(req.body);
    
    res.status(StatusCodes.CREATED).json({ token });
  }
}
