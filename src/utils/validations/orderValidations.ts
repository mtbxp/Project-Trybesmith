import { NewOrder } from '../../interfaces/Order';
import { DefaultHttpResponse } from '../../interfaces/Responses';
import { defaultHttpResponse } from '../responses';
import { newOrderSchema } from './joi-validation-schemas';

const newOrderValidation = (newOrder: NewOrder): string | DefaultHttpResponse => {
  const { error } = newOrderSchema.validate(newOrder);
  if (error) {
    const errMessage = { message: error.details[0].message };
    if (errMessage.message.includes('is required')) {
      return defaultHttpResponse(400, errMessage); 
    }
    return defaultHttpResponse(422, errMessage);
  }
  return 'without errors';
};

export default newOrderValidation;