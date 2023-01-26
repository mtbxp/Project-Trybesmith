import { Request, Response } from 'express';
import createToken from '../auth/jwt';
import UserService from '../services/users.service';

export default class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.create(user);
    const token = createToken(user);
    console.log(token);
    
    return res.status(201).json({ token });
  };
}
