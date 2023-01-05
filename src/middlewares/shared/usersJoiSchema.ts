import Joi from 'joi';
import IUser from '../../Interfaces/user.interface';

export default function usersSchema(): Joi.ObjectSchema<IUser> {
  return Joi.object({
    username: Joi.string().min(3).required(),
    vocation: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).rule({ message: 
        '"password" length must be at least 8 characters long' }).required(),
  }).required().messages({
    'any.required': '{#label} is required',
    'string.required': '{#label} must b a string',
    'string.min': '{#label} length must be at least 3 characters long',
  });
} 