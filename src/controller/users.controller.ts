import { Request, Response, NextFunction } from 'express';
import { TUser } from '../types';

import userService from '../service/users.service';
import { status } from '../utils/status';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body as TUser;
    const token = await userService.createUserService(user);
    return res.status(status.CREATED).json({ token });
  } catch (error) {
    return next(error);
  }
};

export default { createUser };
