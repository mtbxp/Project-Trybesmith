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

  public findByUsername = async (request: Request, response: Response) => {
    const { body } = request;

    const user = await this.userService.findByUsername(body);

    if (!user) {
      return response.status(401).json({ message: 'Username or password invalid' });
    }

    const { password } = user;

    if (body.password !== password) {
      return response.status(401).json({ message: 'Username or password invalid' });
    }

    const token = sign({ user }, secret, { algorithm: 'HS256', expiresIn: '7d' });

    return response.status(200).json({ token });
  };
}

export default UserController;
