import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'Travis Scott';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (request: Request, response: Response) => {
    const { body } = request;

    const user = await this.userService.create(body);

    const token = sign(user, secret, { algorithm: 'HS256', expiresIn: '7d' });

    return response.status(201).json({ token });
  };
}

export default UserController;
