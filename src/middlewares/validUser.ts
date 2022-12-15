import { Request, Response, NextFunction } from 'express';
import validateUser from '../utils/validations/validateUser';
import { TUser } from '../types';

const valid = (validation:string | undefined) => {
  if (validation === '"username" is required' || validation === '"vocation" is required' 
  || validation === '"level" is required' || validation === '"password" is required') {
    return true;
  }
};

export default function validUser(req: Request, res: Response, next: NextFunction) {
  const user = req.body as TUser;

  const validation = validateUser(user);
  
  const respon = valid(validation);

  if (respon) return res.status(400).json({ message: validation });

  if (validation) {
    return res.status(422).json({ message: validation });
  }

  next();
}