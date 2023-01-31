import { Request, Response, NextFunction } from 'express';

export const validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

  const isProductsIdsArray = Array.isArray(productsIds);
  if (!isProductsIdsArray) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  const numberValidate = productsIds.every((item: number) => typeof item === 'number');
  if (!numberValidate || productsIds.length < 1) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  return next();
};

export default {
  validateProductsIds,
};