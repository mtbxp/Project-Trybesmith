import { Request, Response, NextFunction } from 'express';
import { userRequiredSchema, userSchema } from '../schemas';
import { INVALID_CODE, UNPROCESSABLE_CODE } from '../utils';

export const userRequired = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userRequiredSchema.validateAsync(req.body);
    return next();
  } catch (error: any) {
    return res.status(INVALID_CODE).json({ message: error.message });
  }
};

export const userFormat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userSchema.validateAsync(req.body);
    return next();
  } catch (error: any) {
    return res.status(UNPROCESSABLE_CODE).json({ message: error.message });
  }
};
