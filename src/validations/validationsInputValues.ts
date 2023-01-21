import { IOrder, IProduct, IUser } from '../types';
import { addUserSchema, addProductSchema, addOrderSchema } from './schema';

export const validateNewProduct = (product: IProduct) => {
  const { name, amount } = product;
  const { error } = addProductSchema.validate({ name, amount });
  if (error) {
    const [type, message] = error.message.split('|');
    return {
      type, 
      message,
    };
  }
  return {
    type: null, 
    message: '',
  };
};

export const validateNewUser = (user: IUser) => {
  const { username, vocation, level, password } = user;
  const { error } = addUserSchema.validate({ username, vocation, level, password });
  if (error) {
    const [type, message] = error.message.split('|');
    return {
      type, 
      message,
    };
  }
  return {
    type: null, 
    message: '',
  };
};

export const validateNewOrder = (order: IOrder) => {
  const { productsIds } = order;
  const { error } = addOrderSchema.validate({ productsIds });
  if (error) {
    const [type, message] = error.message.split('|');
    return {
      type, 
      message,
    };
  }
  return {
    type: null, 
    message: '',
  };
};
