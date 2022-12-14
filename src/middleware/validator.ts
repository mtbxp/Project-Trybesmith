// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextFunction, Response, Request } from 'express';
// import createHttpError from 'http-errors';
// import validators from '../validators/index';

import { NextFunction, Request, Response } from 'express';
import loginSchema from '../validators/login.validator';

// type Keys = keyof typeof validators;

// export default (validator: Keys) => 
//   // if (!(validator in validators)) throw new Error(`${validator} validator does not exist`);
//   async (req: Request, _res: Response, next: NextFunction) => {
//     try {
//       const validated = await validators[validator].validateAsync(req.body);
//       req.body = validated;
//       next();
//     } catch (error: any | unknown) {
//       return next(createHttpError(422, { message: error.message }));
//       // next(createHttpError(500));
//     }
//   };

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const { error } = loginSchema.validate(userData);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};
export default validateLogin;
