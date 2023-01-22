import { NextFunction, Request, Response } from 'express';
import HttpException from '../http/http.exception';

const httpError = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpException;
  return res.status(status || 500).json({ message });
};

export default httpError;