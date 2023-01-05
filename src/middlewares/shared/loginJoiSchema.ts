import Joi from 'joi';
import ILogin from '../../Interfaces/login.interface';

export default function loginSchema(): Joi.ObjectSchema<ILogin> {
  return Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).required();
}