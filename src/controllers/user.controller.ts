import { Request, Response } from 'express';
import createToken from '../auth/jwtFunctions';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  async insertUser(req: Request, res: Response) {
    const user = req.body;
    await this.userService.insertUser(user);
  
    const token = createToken(user);

    return res.status(201).json({ token });
  }
}
