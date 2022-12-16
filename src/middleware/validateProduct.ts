import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

dotenv.config();

const verifyOrder = Joi.array().items().min(1).required();

export async function validateProductName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof (name) !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
}

export async function validateProductAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof (amount) !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
}

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { error } = verifyOrder(req.body.productsIds);
  if (error) {
    const status = setStatus(error?.details[0].type);
    return res.status(status).json({ message: error?.details[0].message });
  }
  next();
};