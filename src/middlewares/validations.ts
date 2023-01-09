import { Request, Response, NextFunction } from 'express';
import { addProductSchema, newUserSchema, loginSchema } from './schemas';

export function newProductValidation(req: Request, res: Response, next: NextFunction) {
  const addProdReq = req.body;

  const { error } = addProductSchema.validate(addProdReq);

  if (error) {
    const typeError = error.details[0].type as string;
    const msgError = error.details[0].message;

    if (typeError === 'string.min' || typeError === 'string.base') {
      return res.status(422).json({ message: msgError });
    }

    return res.status(400).json({ message: msgError });
  }
  next();
}

export function newUserValidation(req: Request, res: Response, next: NextFunction) {
  const newUserReq = req.body;

  const { error } = newUserSchema.validate(newUserReq);

  if (error) {
    const typeError = error.details[0].type as string;
    const msgError = error.details[0].message;

    if (typeError === 'any.required' || typeError === 'string.empty') {
      return res.status(400).json({ message: msgError });
    }

    return res.status(422).json({ message: msgError });
  }
  next();
}

export function loginValidation(req: Request, res: Response, next: NextFunction) {
  const loginReq = req.body;

  const { error } = loginSchema.validate(loginReq);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
}