import type { RequestHandler } from 'express';
import { loginSchema, productSchema, productsIdsSchema, userSchema } from './schemas';

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

export const validateproductIdsFormat: RequestHandler = async (req, res, next) => {
  const { error } = await productsIdsSchema.validate(req.body);
  if (error) {
    const status = (
      error.message.includes('required'))
      ? 400
      : 422;
    if (error.message === '"productsIds" does not contain 1 required value(s)') {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    return res.status(status).json({ message: error.message });
  } next();
};