import { Request, Response, NextFunction } from 'express';

const hasAllFields = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  return next();
};

const isString = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  return next();
};

const hasLength = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
};

export default {
  hasAllFields,
  isString,
  hasLength,
};