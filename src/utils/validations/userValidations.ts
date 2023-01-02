import { DefaultHttpResponse } from '../../interfaces/Responses';
import { LogUser, User } from '../../interfaces/User';
import { defaultHttpResponse } from '../responses';
import { logUserSchema, newUserSchema } from './joi-validation-schemas';

export const loginValidation = (loginData: LogUser): string | DefaultHttpResponse => {
  const { error } = logUserSchema.validate(loginData);
  if (error) {
    const errMessage = { message: error.details[0].message };
    return defaultHttpResponse(400, errMessage);
  }
  return 'without errors';
};

export const newUserValidation = (newUser: User):string | DefaultHttpResponse => {
  const { error } = newUserSchema.validate(newUser);
  if (error) {
    const errMessage = { message: error.details[0].message };
    if (errMessage.message.includes('is required')) {
      return defaultHttpResponse(400, errMessage);
    }
    return defaultHttpResponse(422, errMessage);
  }
  return 'without errors';
};
