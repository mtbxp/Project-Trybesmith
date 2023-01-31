import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import LoginService from '../service/loginService';

const secret = 'xablau';
const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

export default class LoginController {
  constructor(private logincontroller = new LoginService()) {}

  public userLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const newLogin = await this.logincontroller.userLogin(username, password);

    const token = jwt.sign({ ...newLogin }, secret, jwtConfig as SignOptions);
    return res.status(200).json({ token });
  };
}