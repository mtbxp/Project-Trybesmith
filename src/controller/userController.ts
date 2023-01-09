import { Request, Response } from 'express';
import UserService from '../service/userService';

export default class UserController {
  service = new UserService();

  async addUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const user = { username, classe, level, password };
    const allUser = await this.service.addUser(user);
    return res.status(201).json({ token: allUser });
  }
}