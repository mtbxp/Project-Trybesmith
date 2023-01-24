import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

const verifyKey = (key: string, value: string) => {
  if (!value) {
    return {
      status: statusCodes.BAD_REQUEST,
      message: `"${key}" is required`,
    };
  }
  if (typeof value !== 'string') {
    return {
      status: statusCodes.UNPROCESSABLE_ENTRY,
      message: `"${key}" must be a string`,
    };
  }
  if (value.length < 3) {
    return {
      status: statusCodes.UNPROCESSABLE_ENTRY,
      message: `"${key}" length must be at least 3 characters long`,
    };
  }
};

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const expectedKeys = ['name', 'amount'];

  const errors = expectedKeys.map((key) => verifyKey(key, body[key]));

  const error = errors.find((e) => e !== undefined);

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  
  next();
}
