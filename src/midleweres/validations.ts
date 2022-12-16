import type { RequestHandler } from 'express';
import { loginSchema } from './schemas';

export const validateloginFormat: RequestHandler = async (req, res, next) => { 
  const { error } = await loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};
export const lintFix = [];