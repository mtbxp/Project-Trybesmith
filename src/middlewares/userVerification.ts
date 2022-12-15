import Joi from 'joi';

export const userCheck = (body: object) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required().messages({
      'string.min': '"username" length must be at least 2 characters long',
      'any.required': '"username" is required',
    }),
    password: Joi.string().min(8).required().messages({
      'string.min': '"password" length must be at least 8 characters long',
      'any.required': '"password" is required',
    }),
  });
  return schema.validate(body);
};

export const userCreation = (body: object) => Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.min': '"username" length must be at least 3 characters long',
    'any.required': '"username" is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': '"password" length must be at least 8 characters long',
    'any.required': '"password" is required',
  }),
  vocation: Joi.string().min(3).required().messages({
    'string.min': '"vocation" length must be at least 3 characters long',
    'any.required': '"vocation" is required',
  }),
  level: Joi.number().min(1).required().messages({
    'number.min': '"level" must be greater than or equal to 1',
    'any.required': '"level" is required',
  }),
}).validate(body);