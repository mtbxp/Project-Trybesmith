import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

const verifyStringKeys = (key: string, value: string, minimalLength: number) => {
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
  if (value.length < minimalLength) {
    return {
      status: statusCodes.UNPROCESSABLE_ENTRY,
      message: `"${key}" length must be at least ${minimalLength} characters long`,
    };
  }
};

const verifyLevel = (level: number) => {
  if (!level && level !== 0) {
    return {
      status: statusCodes.BAD_REQUEST, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return {
      status: statusCodes.UNPROCESSABLE_ENTRY,
      message: '"level" must be a number',
    };
  }
  if (Number(level) <= 0) {
    return {
      status: statusCodes.UNPROCESSABLE_ENTRY,
      message: '"level" must be greater than or equal to 1',
    };
  }
};

export default function validateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body } = req;
  const expectedKeys = ['username', 'vocation', 'password'] as string[];
  const keysLength = [3, 3, 8] as number[];
  
  const stringErrors = expectedKeys
    .map((key, i) => verifyStringKeys(key, body[key], keysLength[i]));
  const levelError = verifyLevel(body.level);
  const error = stringErrors.find((e) => e !== undefined) || levelError;

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  next();
}
