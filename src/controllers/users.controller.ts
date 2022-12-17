import { Request, Response } from 'express';
import {
  usersCreateService,
  usersGetService,
} from '../services/users.service';
import statusCodes from '../utils/statusCode';
import createToken from '../auth/token';

const usersCreateController = async (req: Request, res: Response) => {
  const result = await usersCreateService(req.body);
  
  if (result) {
    const token = createToken(req.body.password);
    res.status(statusCodes.CREATED).json({ token });
  }
};

const usersGetController = async (req: Request, res: Response) => {
  const { type, message } = await usersGetService(req.body);
  if (type === statusCodes.UNAUTHORIZED) {
    return res.status(type).json({ message });
  }

  const token = createToken(req.body.password);
  res.status(type).json({ token });
};

export { usersCreateController, usersGetController };