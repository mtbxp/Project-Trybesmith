import { Response, Request, NextFunction } from 'express';

const validationProduct = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, amount } = req.body;

  if (!name || !amount) {
    return res.status(400).json({ message: 'name and amount is required' });
  }
  
  next();
};

export default validationProduct;
