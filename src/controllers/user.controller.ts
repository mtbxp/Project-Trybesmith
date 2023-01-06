import { Request, Response } from 'express';
import UserService from '../services/user.services';
import jwtFuncs from '../authorizations/jwtFuncs';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userSecretData = await this.userService.create(user);

    const token = jwtFuncs.createToken(userSecretData);
    return res.status(201).json({ token });
  };
}

export default UserController;
