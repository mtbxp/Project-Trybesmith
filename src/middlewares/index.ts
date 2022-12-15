import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import loginSchema from './joi';

const loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const loginBody = req.body;

  const { error } = loginSchema.validate(loginBody);

  return error 
    ? res.status(statusCodes.REQUIRED).json({ message: error.details[0].message })
    : next(); 
};

export default loginMiddleware;