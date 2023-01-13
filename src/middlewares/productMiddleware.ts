import { Request, Response, NextFunction } from 'express';
import { productRequiredSchema, productSchema } from '../schemas';
import { INVALID_CODE, UNPROCESSABLE_CODE } from '../utils';

export const productRequired = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await productRequiredSchema.validateAsync(req.body);
    return next();
  } catch (error: any) {
    return res.status(INVALID_CODE).json({ message: error.message });
  }
};

export const productFormat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await productSchema.validateAsync(req.body);
    return next();
  } catch (error: any) {
    return res.status(UNPROCESSABLE_CODE).json({ message: error.message });
  }
};
