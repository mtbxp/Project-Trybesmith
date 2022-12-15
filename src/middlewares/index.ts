import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';

export default class Middleware {
  private joiSchema: Schema;

  constructor(joiSchema: Schema) {
    this.joiSchema = joiSchema;
  }

  validateFields = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
  
    const { error } = this.joiSchema.validate(body);
    
    const code = error?.details[0].type === 'any.required' 
      ? statusCodes.REQUIRED
      : statusCodes.UNPROC;

    return error   
      ? res.status(code).json({ message: error.details[0].message })
      : next();
  };

  validateAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(statusCodes.INVALID).json({ message: 'Token not found' });
    }
  
    const token = authorization.replace('Bearer', '').trim();
    const secret = process.env.JWT_SECRET || 'yourSecretKey';
  
    try {
      const data = jwt.verify(token, secret); 
  
      req.body.user = data;
  
      return next();
    } catch (error) {
      console.log(error);
      
      return res.status(statusCodes.INVALID).json({ message: 'Invalid token' });
    }
  };
}
