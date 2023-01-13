import { Request, Response, NextFunction } from 'express';
import validate from '../auth/validate';

const isUserValid = async (req: Request, res: Response, next: NextFunction) => {
  const tok: any = req.header('Authorization');
  const token: string = tok;

  const user = await validate(token) as any;

  if (user.type) {
    return res.status(user.type).json(user.message);
  }
  req.body.user = user;
  return next();
};

export default isUserValid;