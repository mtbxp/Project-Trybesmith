import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Login } from '../interfaces/login.interface';
import { secret, config } from '../middlewares/jwtConfig';
import userSearchDb from '../services/login.service';

const addLoginUser = async (req: Request, res: Response) => {
  req.body as Login;
  const searchUser = await userSearchDb(req.body);
  if (!searchUser) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const { id, username, vocation, level } = searchUser;

  if (searchUser) {
    const token = jwt.sign({ id, username, vocation, level }, secret, config);
    return res.status(200).json({ token });
  }
};

export default addLoginUser;