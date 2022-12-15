import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/users.service';

const secret = process.env.JWT_SECRET;

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const payload = {
      username: user.username,
      vocation: user.vocation,
      level: user.level,
    };

    const token = jwt.sign(payload, secret as string, {
      algorithm: 'HS256', expiresIn: '7d',
    });

    await this.userService.create(user);

    res.status(201).json({ token });
  };
}