import Joi from 'joi';

const error = {
  'any.required': '{#label} is required',
  'string.empty': '{#label} cannot be an empty field',
  'string.base': '{#label} must be a string',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to {#limit}',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'array.min': '{#label} must include only numbers',
  'array.base': '{#label} must be an array',
};

export const addProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
}).required().messages(error);

export default addProductSchema;