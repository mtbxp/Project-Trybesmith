import { Response, Request, NextFunction } from 'express';
import { checkInputsOrder } from './schemas';

const validationOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = checkInputsOrder.validate({ productsIds });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    } return res.status(422).json({ message: error.message });
  }

  next();
};

export default validationOrder;
