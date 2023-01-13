import { Request, Response } from 'express';
import UserService from '../service/userService';
import createUserSchema from '../validation/createUserSchema';

export default class UserController {
  service = new UserService();

  async addUser(req: Request, res: Response) {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const allUser = await this.service.addUser(req.body);
    return res.status(201).json({ token: allUser });
  }
}