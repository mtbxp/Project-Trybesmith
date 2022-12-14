import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const addUser = async ({ body }: Request, res: Response) => {
  const { status, result, token } = await usersServices.addUser(body);
  return res.status(status).json({ result, token });
};

export default {
  addUser,
};
