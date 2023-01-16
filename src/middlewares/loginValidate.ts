import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const login = req.body;
  
  const { error } = schema.validate(login);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

export default validateLogin;