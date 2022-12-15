import joi from 'joi';
import { TUser } from '../../types';

const userSchema = joi.object({
  username: joi.string().min(3).required().messages({
    'string.base': '"username" must be a string',
    'string.empty': '"username" is required',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  vocation: joi.string().min(3).required().messages({
    'string.base': '"vocation" must be a string',
    'string.empty': '"vocation" is required',
    'string.min': '"vocation" length must be at least 3 characters long',
  }),
  level: joi.number().min(1).required().messages({
    'number.base': '"level" must be a number',
    'number.empty': '"level" is required',
    'number.min': '"level" must be greater than or equal to 1',
  }),
  password: joi.string().min(8).required().messages({
    'string.base': '"password" must be a string',
    'string.empty': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

const validateUser = (user:TUser) => {
  const { error } = userSchema.validate(user);
  if (error) return error.details[0].message;
};

export default validateUser;