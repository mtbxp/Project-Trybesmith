import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
// import messages from '../utils/messages';
import statuses from '../utils/statuses';
// import verifyToken from '../auth/jwtFunctions';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(statuses.MISSING_FIELDS).json({ message: error.message });
  }

  // const { authorization } = req.headers;
  // if (!authorization) {
  //   return res.status(statuses.INVALID_FIELDS).json({ message: messages.INVALID_FIELDS });
  // }

  // try {
  //   const loggedUser = verifyToken.verifyToken(authorization);
  //   if (!loggedUser) {
  //     return res.status(statuses.INVALID_FIELDS).json({ message: messages.INVALID_FIELDS });
  //   }
  // } catch (err) {
  //   return res.status(statuses.INVALID_FIELDS).json({ message: messages.INVALID_TOKEN });
  // }
  next();
};

export default validateLogin;
