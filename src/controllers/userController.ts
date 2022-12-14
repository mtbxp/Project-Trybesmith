import { Request, Response } from 'express';
import { HttpError } from '../interfaces';
import UserService from '../services/userService';
import statusCodes from '../statusCodes';

const userService = new UserService();

export default class UserController {
  create = async (req: Request, res: Response) => {
    const user = req.body;

    try {
      const { status, data } = await userService.create(user);

      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;

      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };
}