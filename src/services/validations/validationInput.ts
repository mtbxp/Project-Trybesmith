import Login from '../../interfaces/login.interface';
import User from '../../interfaces/user.Interface';
import Product from '../../interfaces/product.interface';
import HttpException from '../../http/http.exception';
import { loginSchema, productSchema, userSchema } from './schemas';

export const loginValidation = ({ username, password }: Login) => {
  const { error } = loginSchema.validate({ username, password });
  if (!error) return null;
  throw new HttpException(400, error.message);
};

export const productValidation = ({ name, amount }: Product) => {
  const { error } = productSchema.validate({ name, amount });
  if (!error) return null;
  if (error.details[0].type === 'any.required') throw new HttpException(400, error.message);
  throw new HttpException(422, error.message);
};

export const userValidation = ({ username, vocation, level, password }: User) => {
  const { error } = userSchema.validate({ username, vocation, level, password });
  if (!error) return null;
  if (error.details[0].type === 'any.required') throw new HttpException(400, error.message);
  throw new HttpException(422, error.message);
};