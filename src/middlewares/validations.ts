import { Request, Response, NextFunction } from 'express';
import { addProductSchema } from './schemas';

export default function newProductValidation(req: Request, res: Response, next: NextFunction) {
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
