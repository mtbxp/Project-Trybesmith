import { Request, Response } from 'express';
import createToken from '../auth/jwt';
import UserService from '../services/users.service';

export default class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const result = await this.userService.create(user);
    const token = createToken(result);
    // console.log(result, 'ss');
    return res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const login = req.body;
    const result = await this.userService.login(login);
    if (!result) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = createToken(result);
    return res.status(200).json({ token });
  };
}
