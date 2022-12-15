import { Request, Response } from 'express';
import userService from '../service/user.service';
import { TUser } from '../type';

const createNewUserController = async (req: Request, res: Response) => {
  const createNewUser = await userService.insertNewUserService(req.body as TUser);

  return res.status(createNewUser.status).json({ token: createNewUser.token });
};

export default { createNewUserController };