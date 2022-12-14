// import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default function authValidations(req:Request, res:Response, next: NextFunction) {
  if (!req.body.username) {
    const message = '"username" is required';
    return res.status(400).json({ message });
  }
  if (!req.body.password) {
    const message = '"password" is required';
    return res.status(400).json({ message });
  }
  next();
}
