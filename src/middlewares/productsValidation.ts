import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const productValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default productValidation;
