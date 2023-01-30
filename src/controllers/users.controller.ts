import { Request, Response } from 'express';
import usersService from '../services/users.service';
import statuses from '../utils/statuses';

const createUser = async (req: Request, res: Response) => {
  const token = await usersService.createUser(req.body);
  res.status(statuses.SUCCESSFULLY_CREATED).json({ token });
};

export default { createUser };
