import { NextFunction, Request, Response } from 'express';
import Decode from '../tokens/decode';

class OrderMiddleware {
  public static validateToken(request: Request, response: Response, next: NextFunction) {
    const token = request.header('Authorization');

    if (!token) {
      return response.status(401).json({ message: 'Token not found' });
    }

    const data = Decode.decode(token);

    if (!data) {
      return response.status(401).json({ message: 'Invalid token' });
    }

    next();
  }

  public static validateproductsIds(request: Request, response: Response, next: NextFunction) {
    const { productsIds } = request.body as { productsIds: number[] };

    if (!productsIds) {
      return response.status(400).json({ message: '"productsIds" is required' });
    }

    if (!Array.isArray(productsIds)) {
      return response.status(422).json({ message: '"productsIds" must be an array' });
    }

    if (!productsIds.length) {
      return response.status(422).json({ message: '"productsIds" must include only numbers' });
    }

    next();
  }
}

export default OrderMiddleware;
