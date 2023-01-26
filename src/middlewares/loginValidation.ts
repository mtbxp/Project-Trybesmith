import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().min(3),
  password: Joi.string().required(),
});

const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export default loginValidation;