import type { RequestHandler } from 'express';
import { loginSchema, productSchema, userSchema } from './schemas';

export const validateloginFormat: RequestHandler = async (req, res, next) => { 
  const { error } = await loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export const validateProductFormat: RequestHandler = async (req, res, next) => {
  const { error } = await productSchema.validate(req.body);
 
  if (error) {
    const status = (error.message.includes('required'))
      ? 400
      : 422;
    return res.status(status).json({ message: error.message });
  }
  next();
};
export const validateUserFormat: RequestHandler = async (req, res, next) => {
  const { error } = await userSchema.validate(req.body);
  if (error) {
    const status = (error.message.includes('required'))
      ? 400
      : 422;
    return res.status(status).json({ message: error.message });
  } next();
};