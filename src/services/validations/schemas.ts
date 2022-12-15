import Joi from 'joi';
import Product from '../../interfaces/product.interface';

const productSchema = Joi.object<Product>({
  name: Joi.string()
    .min(3)
    .required(),
  amount: Joi.string()
    .min(3)
    .required(),
});

export default productSchema;