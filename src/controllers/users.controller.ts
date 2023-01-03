import { Request, Response } from 'express';
import usersService from '../services/users.service';

export default {
  createUser: async (req: Request, res: Response): Promise<Response> => {
    const output = await usersService.createUser(req.body);

    return res.status(201).json(output);
  },
};