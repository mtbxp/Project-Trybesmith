import { Request, Response } from 'express';
import httpStatusCodes from '../httpStatusCodes';
import userService from '../services/user.service';

const createUserController = async (req: Request, res: Response) => {
  const newUser = await userService.createUserService(req.body);
  return res.status(httpStatusCodes.CREATED).json(newUser);
};

const getAllUsersController = async (_req: Request, res: Response) => {
  const allUsers = await userService.getAllUsersService();
  return res.status(httpStatusCodes.OK).json(allUsers);
};

export default {
  createUserController,
  getAllUsersController,
};
