import { productSchema, userSchema } from './schemas';
import Product from '../../interfaces/product.interface';
import User from '../../interfaces/user.interface';

export const validateNewProduct = async (product: Product) => {
  const { error } = productSchema.validate(product);
  if (error) return error.message;

  return null;
};

export const validateNewUser = async (user: User) => {
  const { error } = userSchema.validate(user);
  if (error) return error.message;

  return null;
};