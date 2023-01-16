import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const login = req.body;
  
  const { error } = schema.validate(login);
  console.log(error);
  if (error) {
    return res.status(400).json({ message: error.details[0].message }); // status[firstError.details[0].type] Erro dinamico
  }

  next();
};

export default validateLogin;