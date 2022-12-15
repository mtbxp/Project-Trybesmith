import { Request, Response, NextFunction } from 'express';
import { productSchema } from '../utils/inputsValidations';

const setStatus = (type: string | undefined) => {
  let status = 400;
  if (type !== 'any.required') {
    status = 422;
  }
  return status;
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    const status = setStatus(error?.details[0].type);
    return res.status(status).json({ message: error?.details[0].message });
  }
  next();
};

export default validateProduct;