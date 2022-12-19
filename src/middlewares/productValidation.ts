import { NextFunction, Request, Response } from 'express';

export const nameValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.body;
    
    if (!name) return res.status(400).json({ message: '"name" is required' });

    if (typeof name !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' }); 
    }

    if (name.length <= 2) {
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' }); 
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }

  next();
};

export const amountValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { amount } = req.body;

    if (!amount) return res.status(400).json({ message: '"amount" is required' });

    if (typeof amount !== 'string') {
      return res.status(422).json({ message: '"amount" must be a string' });
    }

    if (amount.length <= 2) {
      return res.status(422)
        .json({ message: '"amount" length must be at least 3 characters long' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }

  next();
};

export const productIdValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { productsIds } = req.body;

  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' }); 
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' }); 
  }

  next();
};
