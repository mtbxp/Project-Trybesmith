import { loginSchema, productSchema, productsIdsArrSchema, userSchema } from './schemas';
import Product from '../../interfaces/product.interface';
import { Login, User } from '../../interfaces/user.interface';

export const validateNewProduct = async (product: Product) => {
  const { error } = productSchema.validate(product);
  if (error) return error.message;

  return null;
};

export const validateLogin = async (login: Login) => {
  const { error } = loginSchema.validate(login);
  if (error) return error.message;

  return null;
};

export const validateNewUser = async (user: User) => {
  const { error } = userSchema.validate(user);
  if (error) return error.message;

  return null;
};

export const validateProductsIdsArr = async (arr: number[]) => {
  const { error } = productsIdsArrSchema.validate(arr);
  if (error) return error.message;

  return null;
};