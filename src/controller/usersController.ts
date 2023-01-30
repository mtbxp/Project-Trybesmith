import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../service/userService';
import { User } from '../interfaces';

const secret = 'xablau';
const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

export default class ProductController {
  constructor(private userService = new UserService()) {}

  public userCreated = async (req: Request, res: Response) => {
    const resultUser = req.body as User;

    const newUser = await this.userService.userCreated(resultUser);

    const token = jwt.sign({ ...newUser }, secret, jwtConfig as SignOptions);
    return res.status(201).json({ token });
  };
}