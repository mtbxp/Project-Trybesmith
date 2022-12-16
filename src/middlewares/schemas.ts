import Joi from 'joi';

const errorObject = {
  'any.required': '{#label} is required',
  'string.empty': '{#label} cannot be an empty field',
  'string.base': '{#label} must be a string',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to {#limit}',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'array.min': '{#label} must include only numbers',
  'array.base': '{#label} must be an array',
};

export const loginRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages(errorObject);

export const createUserSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
}).required().messages(errorObject);

export const createProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
}).required().messages(errorObject);

export const newOrderSchema = Joi.object({
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'array.min': '{#label} must include only numbers',
      'array.base': '{#label} must be an array',
      'any.required': '{#label} is required',
      'number.base': '{#label} must include only numbers',
    }),
});