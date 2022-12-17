import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCode';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || username === null) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"username" is required',
    });
  }
  if (!password || password === null) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"password" is required',
    });
  }

  next();
};

export default validateLogin;