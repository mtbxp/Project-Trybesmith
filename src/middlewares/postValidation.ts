import {Request, Response, NextFunction} from 'express';
import statusCodes from '../utils/statuscode';

const validate = async ( req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if(name === null || name.length === 0) res.status(statusCodes.NOT_FOUND).json({message: '"name" is required'})
  return next()
};

export default validate;
