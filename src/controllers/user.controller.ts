import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import UserService from '../services/user.service';
import generateToken from '../utils/generateToken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);

    const token = generateToken(Number(userCreated.id));

    res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;