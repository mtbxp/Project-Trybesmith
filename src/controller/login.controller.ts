import { Request, Response, NextFunction } from 'express';
import loginService from '../service/login.service';
import { TLogin } from '../types';
import { status } from '../utils/status';

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body as TLogin;
    const token = await loginService.loginUserService(user);
    return res.status(status.OK).json({ token });
  } catch (error) {
    return next(error);
  }
};

export default { userLogin };