import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import statusCode from '../utils/statusCode';

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  
  const { error } = schema.validate(user);

  if (error) {
    const statusCod = statusCode(error.details[0].type);
    return res.status(statusCod).json({ 
      message: error.details[0].message });
  }

  next();
};

export default validateProduct;