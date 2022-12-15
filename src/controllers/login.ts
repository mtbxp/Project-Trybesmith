import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import * as UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'secret';

export default async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;

    const user = await UserService.getByUser(username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const jwtConfig:object = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ username, password }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err:unknown) {
    console.log(err);
  }
}
