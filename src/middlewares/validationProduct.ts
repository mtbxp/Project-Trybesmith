import { Response, Request, NextFunction } from 'express';
import { checkInputsProduct } from './schemas';

const validationProduct = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, amount } = req.body;
  const { error } = checkInputsProduct.validate({ name, amount });

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  
  next();
};

export default validationProduct;
