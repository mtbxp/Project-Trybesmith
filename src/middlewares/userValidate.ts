import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import statusCode from '../utils/statusCode';

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  
  const { error } = schema.validate(user);

  if (error) {
    // const statusCod = statusCode[error.details[0].type] as number;
    const statusCod = statusCode(error.details[0].type);
    return res.status(statusCod).json({ 
      message: error.details[0].message });
    // return res.status(statusCod).json({ message: error.details[0].message });
  }

  next();
};

export default validateUser;