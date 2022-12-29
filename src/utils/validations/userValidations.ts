import { DefaultHttpResponse } from '../../interfaces/Responses';
import { LogUser } from '../../interfaces/User';
import { defaultHttpResponse } from '../responses';
import logUserSchema from './joi-validation-schemas';

const loginValidation = (loginData: LogUser): string | DefaultHttpResponse => {
  const { error } = logUserSchema.validate(loginData);
  if (error) {
    const errMessage = { message: error.details[0].message };
    return defaultHttpResponse(400, errMessage);
  }
  return 'without errors';
};

export default loginValidation;