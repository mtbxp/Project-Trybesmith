import { Request, Response } from 'express';
import UserService from '../services/users.service';
import Jwt from '../auth/jwt.auth';

class UserController {
  constructor(private userService = new UserService()) {}

  public getByUsername = async (req: Request, res: Response) => {
    const login = req.body;

    const user = await this.userService.getByUsername(login);

    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = Jwt.loginToken(user);

    return res.status(200).json({ token });
  };

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;

    const token = await this.userService.create(newUser);

    return res.status(201).json({ token });
  };
}

export default UserController;