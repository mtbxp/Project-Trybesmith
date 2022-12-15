import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

async function protectedRoute(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | void> {
  const token = request.header('Authorization');

  if (!token) return response.status(401).json({ message: 'Token not found' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);

    (request as Request & { user: { id: number } }).user = { id: (payload as { id: number }).id };

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Invalid token' });
  }
}

export default protectedRoute;