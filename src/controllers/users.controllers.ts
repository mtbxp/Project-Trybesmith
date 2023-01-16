import { Request, Response } from 'express';
import usersServices from '../services/users.services';
import createToken from '../middlewares/jwtAuthentication';
import { TRegister } from '../types';

const insert = async (req: Request, res: Response) => {
  const newUser: TRegister = req.body;
  const user = await usersServices.register(newUser);
  const token = createToken(user);

  return res.status(201).json({ token });
};

export default { insert };