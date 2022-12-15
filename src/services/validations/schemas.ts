import Joi from 'joi';
import Product from '../../interfaces/product.interface';
import { Login, User } from '../../interfaces/user.interface';

export const productSchema = Joi.object<Product>({
  name: Joi.string()
    .min(3)
    .required(),
  amount: Joi.string()
    .min(3)
    .required(),
});

export const loginSchema = Joi.object<Login>({
  username: Joi.string()
    .min(3)
    .required(),
  password: Joi.string()
    .min(8)
    .required(),
});

export const userSchema = Joi.object<User>({
  username: Joi.string()
    .min(3)
    .required(),
  vocation: Joi.string()
    .min(3)
    .required(),
  level: Joi.number()
    .integer()
    .min(1)
    .required(),
  password: Joi.string()
    .min(8)
    .required(),
});