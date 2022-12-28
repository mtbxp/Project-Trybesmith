import { Request, Response } from 'express';
// import * as userService from '../services/user.service';
import userService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

export default async function createUser(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  const token = await userService(user);

  return res.status(statusCodes.CREATED).json({ token });
}