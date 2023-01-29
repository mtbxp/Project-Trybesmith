import { NextFunction, Request, Response } from 'express';

const validadeProductName = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  if (!product.name) return res.status(400).json({ message: '"name" is required' }); 
  if (typeof product.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' }); 
  }
  if (product.name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' }); 
  }
  next();
};

const validadeProductQuantity = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  if (!product.amount) return res.status(400).json({ message: '"amount" is required' }); 
  if (typeof product.amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' }); 
  }
  if (product.amount.length <= 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' }); 
  }
  next();
};

export default {
  validadeProductName,
  validadeProductQuantity,
};
