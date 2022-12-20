import { Request, Response } from 'express';
import addNewUser from '../services/userService';

const addUsers = async (req: Request, res: Response) => {
  const userDate = req.body;
  const result = await addNewUser(userDate);
  res.status(result.status).json(result.date);
};

export default addUsers;