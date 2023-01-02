import { NewProduct } from '../../interfaces/Product';
import { DefaultHttpResponse } from '../../interfaces/Responses';
import { defaultHttpResponse } from '../responses';
import { newProductSchema } from './joi-validation-schemas';

const productValidation = (newProductData: NewProduct): string | DefaultHttpResponse => {
  const { error } = newProductSchema.validate(newProductData);
  if (error) {
    const errMessage = { message: error.details[0].message };
    if (errMessage.message === '"name" is required'
    || errMessage.message === '"amount" is required') {
      return defaultHttpResponse(400, errMessage); 
    }
    return defaultHttpResponse(422, errMessage);
  }
  return 'without errors';
};

export default productValidation;