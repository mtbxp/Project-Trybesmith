import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/product.interface';

class ProductMiddleware {
  public static validateName(request: Request, response: Response, next: NextFunction) {
    const { name } = request.body as Product;

    if (!name) {
      return response.status(400).json({ message: '"name" is required' });
    }

    if (typeof name !== 'string') {
      return response.status(422).json({ message: '"name" must be a string' });
    }

    if (name.length < 3) {
      return response.status(422).json({ 
        message: '"name" length must be at least 3 characters long', 
      });
    }

    next();
  }

  public static validateAmount(request: Request, response: Response, next: NextFunction) {
    const { amount } = request.body as Product;

    if (!amount) {
      return response.status(400).json({ message: '"amount" is required' });
    }

    if (typeof amount !== 'string') {
      return response.status(422).json({ message: '"amount" must be a string' });
    }

    if (amount.length < 3) {
      return response.status(422).json({ 
        message: '"amount" length must be at least 3 characters long', 
      });
    }

    next();
  }
}

export default ProductMiddleware;
