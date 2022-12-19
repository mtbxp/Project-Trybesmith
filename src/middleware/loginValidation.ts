import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).required().messages({
    'any.required': '{#label} is required',
  });

  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateLogin;
