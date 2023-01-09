import { Request, Response } from 'express';
import createToken from '../auth/jwtFunction';
import UserService from '../services/user.service';

const HTTP_STATUS_CREATED = 201;

export default class UserController {
  public userService = new UserService();

  async userInsert(req: Request, res: Response) {
    const user = req.body;
    await this.userService.userInsert(user);

    const token = createToken(user);

    return res.status(HTTP_STATUS_CREATED).json({ token });
  }
}