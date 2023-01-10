import { Request, Response } from 'express';
import usersService from '../services/users.service';

export default {
  create: async (req: Request, res: Response) => {
    const result = await usersService.create(req.body);

    res.status(201).json({ token: result.output });
  },
};