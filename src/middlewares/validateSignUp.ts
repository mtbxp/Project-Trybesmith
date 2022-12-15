import { Request, Response, NextFunction } from 'express';
import {  usernameSchema, passwordSchema, vocationSchema, levelSchema } from '../utils/inputsValidations'

const validateSignUp = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, vocation, level } = req.body;
  const validateUsername = usernameSchema.validate(username);
  const validatePassword = passwordSchema.validate(password);
  const validateVocation = vocationSchema.validate(vocation);
  const validateLevel = levelSchema.validate(level);
  // console.log(validateUsername.error);
  
  if (validateUsername.error || validatePassword.error || validateVocation.error || validateLevel.error) {
    const error = validateUsername.error || validatePassword.error || validateVocation.error || validateLevel.error;
    console.log(error?.details[0].type);

    let status = 400;
    if(error?.details[0].type !== 'any.required') {
      status = 422
    }
    
    return res.status(status).json({ message: error?.details[0].message });
  }
  next();
};

export default validateSignUp;