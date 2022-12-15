import productSchema from './schemas';
import Product from '../../interfaces/product.interface';

export const validateNewProduct = async (product: Product) => {
  const { error } = productSchema.validate(product);
  if (error) return error.message;

  return null;
};

export default validateNewProduct;