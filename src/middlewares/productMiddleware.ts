import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';

function validateFieldValue(value: string | undefined, property: string) {
  if (typeof value !== 'string') {
    return {
      status: statusCodes.UNPROCESSABLE,
      message: `"${property}" must be a string`,
    };
  }
  if (value.length < 3) {
    return {
      status: statusCodes.UNPROCESSABLE,
      message: `"${property}" length must be at least 3 characters long`,
    };
  }
  return null;
}

export default function validateProductFields(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const properties = ['name', 'amount'];

  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(req.body, properties[i])) {
      const message = `"${properties[i]}" is required`;

      return res.status(statusCodes.BAD_REQUEST).json({ message });
    }

    const currFieldValue = req.body[properties[i]]; // Valor de "name" ou "amount"

    const error = validateFieldValue(currFieldValue, properties[i]);

    if (error) return res.status(error.status).json({ message: error.message });
  }

  next();
}