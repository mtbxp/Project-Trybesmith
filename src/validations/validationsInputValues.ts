import { IProduct } from '../types';
import addProductSchema from './schema';

const validateNewProduct = (product: IProduct) => {
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

export default validateNewProduct;
