import { Request, Response } from 'express';
import usersCreateService from '../services/users.service';
import statusCodes from '../utils/statusCode';
import createToken from '../auth/token';

const usersCreateController = async (req: Request, res: Response) => {
  const result = await usersCreateService(req.body);
  
  if (result) {
    const token = createToken(req.body.password);
    res.status(statusCodes.CREATED).json({ token });
  }
};

export default usersCreateController;