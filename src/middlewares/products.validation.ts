import { NextFunction, Request, Response } from 'express';
import { productValidation } from './schemas';

const validationProducts = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = productValidation.validate({ name, amount });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    } return res.status(422).json({ message: error.message });
  }
  next();
};

export default validationProducts;