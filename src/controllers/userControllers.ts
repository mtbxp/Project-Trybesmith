import { Request, Response } from 'express';
import userService from '../services/userService';
import statusCodes from '../helpers/statusCodes';

async function create(req: Request, res: Response) {
  const result = await userService.create(req.body);

  return res.status(statusCodes.CREATED).json({ token: result });
}

export default {
  create,
};