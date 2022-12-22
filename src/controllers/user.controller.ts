import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();  
  }

  async addUser(req: Request, res: Response) {
    const userData = req.body;
    const { status, message } = await this.userService.addUser(userData); 
    return res.status(status).json({ token: message });
  }
}