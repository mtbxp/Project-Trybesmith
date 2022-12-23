import { Request, Response } from 'express';
import loginService from '../services/loginService';
import statusCodes from '../helpers/statusCodes';

async function getUser(req: Request, res: Response) {
  const result = await loginService.getUser(req.body);

  if (!result) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }

  return res.status(statusCodes.OK).json({ token: result });
}

export default {
  getUser,
};