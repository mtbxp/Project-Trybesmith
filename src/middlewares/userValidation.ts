import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8) });

const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default userValidation;