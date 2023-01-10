import { Request, Response } from 'express';
import usersService from '../services/users.service';

export default {
  login: async (req: Request, res: Response) => {
    const { err, output } = await usersService.login(req.body);

    if (err) return res.status(err.statusCode).json(output);

    return res.status(200).json(output);
  },

  create: async (req: Request, res: Response) => {
    const result = await usersService.create(req.body);

    res.status(201).json({ token: result.output });
  },
};