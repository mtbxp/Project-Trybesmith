import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const checkProductsIds = Joi.object({
  productsIds: Joi.array().required().items(Joi.number()).min(1),
  user: Joi.number(),
}).required().messages({
  'any.required': '{#label} is required',
  'array.base': '{#label} must be an array',
  'array.includes': '{#label} must include only numbers',
  'array.min': '{#label} must include only numbers',
});

const validate = async (req:Request, res:Response, next:NextFunction) => {
  const productsIds = req.body;
  const { error } = checkProductsIds.validate(productsIds);
  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
    return res.status(422).json({ message: error.details[0].message }); 
  }

  next();
};

export = validate;