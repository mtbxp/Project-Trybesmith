import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import statusCodes from '../statusCodes';

export default class Middleware {
  private joiSchema: Schema;

  constructor(joiSchema: Schema) {
    this.joiSchema = joiSchema;
  }

  validatefields = async (req: Request, res: Response, next: NextFunction) => {
    const fields = req.body;
  
    const { error } = this.joiSchema.validate(fields);
    console.log(error);
    
    const code = error?.details[0].type === 'any.required' 
      ? statusCodes.REQUIRED
      : statusCodes.UNPROC;

    return error   
      ? res.status(code).json({ message: error.details[0].message })
      : next();
  };
}
